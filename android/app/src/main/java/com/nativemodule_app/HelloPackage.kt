package com.nativemodule_app

import com.facebook.react.TurboReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class HelloPackage : TurboReactPackage() {

  override fun getModule(
    name: String,
    reactContext: ReactApplicationContext
  ): NativeModule? {
    return when (name) {
    "HelloModule" -> HelloModule(reactContext)
    else -> null
  }
  }

  override fun getReactModuleInfoProvider(): ReactModuleInfoProvider {
    return ReactModuleInfoProvider {
      mapOf(
        "HelloModule" to ReactModuleInfo(
          "HelloModule",
          "HelloModule",
          false, // canOverrideExistingModule
          false, // needsEagerInit
          false, // hasConstants
          true   // isTurboModule 👈 REQUIRED
        )
      )
    }
  }
}
