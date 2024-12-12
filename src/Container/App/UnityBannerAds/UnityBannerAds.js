import React, {useCallback, useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import BackButton from '../../../Components/BackButton/BackButton';

import {
  IronSource,
  ATTrackingManager,
  ATTStatus,
  LevelPlay,
  LevelPlayInitRequest,
  AdFormat,
  LevelPlayAdError,
  LevelPlayAdSize,
  LevelPlayBannerAdView,
} from 'ironsource-mediation';

import HighlightButton from '../UnityAds/HighlightButton';

const APP_USER_ID = 'some-unique-application-user-id';
const APP_KEY = Platform.OS === 'android' ? '1dc3db545' : '1dc3deecd';
const BANNER_AD_UNIT_ID =
  Platform.OS === 'android' ? 'iq2gxli4u8n10jrp' : 'pfhu8mrg1arqwlo8';

export default function UnityBannerAds({navigation, route}) {
  const listener = {
    onInitializationComplete: () => {
      console.log('onInitializationComplete');
    },
  };
  useEffect(() => {
    IronSource.setInitializationListener(listener);
    initIronSource();
    return () => {};
  }, []);

  async function initIronSource() {
    console.log('=== initIronSource ===');

    try {
      // This API can be called in parallel
      IronSource.validateIntegration().catch(e => console.error(e));

      // ARM ImpressionData
      setImpressionDataListener();

      // Set adapters and network SDKs to debug
      await IronSource.setAdaptersDebug(true);

      // This should be enabled to detect network condition errors
      await IronSource.shouldTrackNetworkState(true);

      // GDPR Consent
      await IronSource.setConsent(true);

      // COPPA
      await IronSource.setMetaData('is_child_directed', ['false']);

      // Segment
      await IronSource.setSegment(createSegment());

      // GAID, IDFA
      const advertiserId = await IronSource.getAdvertiserId();
      console.log(`AdvertiserID: ${advertiserId}`);

      // Do not use advertiserId for this.
      // Use an application user id.
      await IronSource.setUserId(APP_USER_ID);

      // Request ATT for iOS
      if (Platform.OS === 'ios') {
        await checkATT();
      }

      let initRequest = LevelPlayInitRequest.builder(APP_KEY)
        .withLegacyAdFormats([
          AdFormat.BANNER,
          AdFormat.INTERSTITIAL,
          AdFormat.REWARDED,
          AdFormat.NATIVE_AD,
        ])
        .build();

      const initListener = {
        onInitFailed: error => {
          console.log(`onInitFailed: ${JSON.stringify(error)}`);
        },
        onInitSuccess: configuration => {
          console.log(`onInitSuccess: ${JSON.stringify(configuration)}`);
        },
      };

      await LevelPlay.init(initRequest, initListener);
    } catch (e) {
      console.error('init err =>', e);
    }
  }

  function createSegment() {
    const segment = {
      // Method 1: Specify by the name
      // segmentName: 'DemoSegment',
      // Method 2: Send parameters to have the server match a segment
      age: 20, // Int
      gender: 'female', // 'female' | 'male'
      level: 9, // Int
      isPaying: false,
      userCreationDateInMillis: 1632388612380, // Long
      iapTotal: 100.99, // Double
      // Up to 5 custom parameters are allowed.
      customParameters: {
        customKey1: 'customValue1',
        customKey2: 'customValue2',
        customKey3: 'customValue3',
        customKey4: 'customValue4',
        customKey5: 'customValue5',
      },
    };
    return segment;
  }

  /**
   * ARM ImpressionDataListener event
   * The ARM SDK Postbacks flag must be enabled to receive data
   * https://developers.is.com/ironsource-mobile/general/ad-revenue-measurement-postbacks/#step-1
   */
  function setImpressionDataListener() {
    const impressionListener = {
      onImpressionSuccess: data => {
        console.log(`ImpressionData: ${JSON.stringify(data)}`);
      },
    };

    IronSource.setImpressionDataListener(impressionListener);
  }

  /**
   * Check iOS14 ATT status
   * Not part of the ironSource SDK API.
   */
  async function checkATT() {
    if (Platform.OS !== 'ios') return;

    let currentStatus =
      await ATTrackingManager.getTrackingAuthorizationStatus();
    console.log(`ATTStatus: ${currentStatus}`);

    if (currentStatus === ATTStatus.NotDetermined) {
      currentStatus = await ATTrackingManager.requestTrackingAuthorization();
      console.log(`ATTStatus returned: ${currentStatus}`);
    }
  }

  const bannerAdViewRef = useRef(null);
  const [adKey, setAdKey] = useState(0);
  const adSize = LevelPlayAdSize.BANNER;

  // LevelPlay Banner Ad View listener
  const bannerlistener = {
    onAdLoaded: adInfo => {
      console.log('Banner Ad View - Ad Loaded: ', adInfo);
    },
    onAdLoadFailed: error => {
      console.log('Banner Ad View - Ad Load Failed: ', error);
    },
    onAdDisplayed: adInfo => {
      console.log('Banner Ad View - Ad Displayed: ', adInfo);
    },
    onAdDisplayFailed: (adInfo, error) => {
      console.log('Banner Ad View - Ad Display Failed: ', adInfo, error);
    },
    onAdClicked: adInfo => {
      console.log('Banner Ad View - Ad Clicked: ', adInfo);
    },
    onAdExpanded: adInfo => {
      console.log('Banner Ad View - Ad Expanded: ', adInfo);
    },
    onAdCollapsed: adInfo => {
      console.log('Banner Ad View - Ad Collapsed: ', adInfo);
    },
    onAdLeftApplication: adInfo => {
      console.log('Banner Ad View - Ad Left Application: ', adInfo);
    },
  };

  // Load ad
  const loadAd = useCallback(() => {
    bannerAdViewRef.current?.loadAd();
  }, []);

  const destroyAdAndCreateNew = useCallback(() => {
    bannerAdViewRef.current?.destroy();
    setAdKey(prevKey => prevKey + 1);
  }, []);

  const pauseAutoRefresh = useCallback(() => {
    bannerAdViewRef.current?.pauseAutoRefresh();
  }, []);

  const resumeAutoRefresh = useCallback(() => {
    bannerAdViewRef.current?.resumeAutoRefresh();
  }, []);

  return (
    <View>
      <BackButton onPress={() => navigation.goBack()} />
      <Text style={[styles.h2, styles.alignCenter]}>Banner Ad View</Text>
      <Button title="Load Ad" onPress={loadAd} />
      <Button title="Destroy Ad" onPress={destroyAdAndCreateNew} />
      <Button title="Pause Auto Refresh" onPress={pauseAutoRefresh} />
      <Button title="Resume Auto Refresh" onPress={resumeAutoRefresh} />

      <LevelPlayBannerAdView
        ref={bannerAdViewRef}
        key={adKey}
        adUnitId={BANNER_AD_UNIT_ID}
        adSize={adSize}
        placementName=""
        listener={bannerlistener}
        style={{
          width: adSize.width,
          height: adSize.height,
          alignSelf: 'center',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  body: {
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 12,
  },
  wrapper: {padding: 8},
  image: {width: '100%', resizeMode: 'contain'},
  text: {position: 'absolute', bottom: 0, right: 8},
  horizontalSpaceBetween: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  alignCenter: {
    textAlign: 'center',
  },
  h2: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  native_ad: {
    height: 350, // Your chosen height
    width: '100%', // Your chosen width
    // More styling ...
  },
});
