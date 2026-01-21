package com.nativemodule_app

import android.content.Context
import android.os.BatteryManager
import com.facebook.react.bridge.ReactApplicationContext

class HelloModule(
  private val reactContext: ReactApplicationContext
) : NativeHelloModuleSpec(reactContext) {

  override fun getMessage(): String {
    return "Hello World from Android Native 🎯"
  }

  override fun getBatteryLevel(): Double {
    val batteryManager =
      reactContext.getSystemService(Context.BATTERY_SERVICE) as BatteryManager

    return batteryManager
      .getIntProperty(BatteryManager.BATTERY_PROPERTY_CAPACITY)
      .toDouble()
  }
}
