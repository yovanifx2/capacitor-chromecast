# @gameleap/capacitor-chromecast

This is a plugin for Capacitor that enables Chromecast functionality for iOS and Android.

## Install

```bash
npm install @gameleap/capacitor-chromecast
npx cap sync
```

## API

<docgen-index>

* [`initialize(...)`](#initialize)
* [`requestSession()`](#requestsession)
* [`loadMedia(...)`](#loadmedia)
* [`addListener(string, ...)`](#addlistenerstring)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### initialize(...)

```typescript
initialize(options: any) => Promise<void>
```

| Param         | Type             |
| ------------- | ---------------- |
| **`options`** | <code>any</code> |

--------------------


### requestSession()

```typescript
requestSession() => Promise<void>
```

--------------------


### loadMedia(...)

```typescript
loadMedia(mediaUrl: any) => Promise<boolean>
```

| Param          | Type             |
| -------------- | ---------------- |
| **`mediaUrl`** | <code>any</code> |

**Returns:** <code>Promise&lt;boolean&gt;</code>

--------------------


### addListener(string, ...)

```typescript
addListener(eventName: string, listenerFunc: ListenerCallback) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                          |
| ------------------ | ------------------------------------------------------------- |
| **`eventName`**    | <code>string</code>                                           |
| **`listenerFunc`** | <code><a href="#listenercallback">ListenerCallback</a></code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


### Type Aliases


#### ListenerCallback

<code>(err: any, ...args: any[]): void</code>

</docgen-api>
