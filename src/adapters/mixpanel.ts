import mixpanel, {OverridedMixpanel} from 'mixpanel-browser';

mixpanel.init('c834cee7fbc4076512cc7e58cd04bd2f')


class MixpanelClient {
  private client: OverridedMixpanel

  constructor() {
    this.client = mixpanel;
  }

  visit(path: string) {
    this.client.track(
      'Visit',
      {
        path,
      }
    )
  }
}

export const mixpanelClient = new MixpanelClient()
