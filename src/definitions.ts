import { ListenerCallback, PluginListenerHandle } from '@capacitor/core';

export interface ChromecastPlugin {
  initialize(options: any): Promise<void>;

  requestSession(): Promise<void>;

  loadMedia(mediaUrl: any): Promise<boolean>;

  addListener(
    eventName: string,
    listenerFunc: ListenerCallback,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;
}
