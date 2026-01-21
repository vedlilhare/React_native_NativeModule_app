package com.nativemodule_app

import android.os.BatteryManager
import android.content.Context  
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactContextBaseJavaModule

class HelloModule(private val reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName() = "HelloModule"

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun getMessage(): String {
        return "Hello World from Android Native 🎯"
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun getBatteryLevel(): Int {
        val batteryManager =
            reactApplicationContext.getSystemService(Context.BATTERY_SERVICE) as BatteryManager

        return batteryManager.getIntProperty(
            BatteryManager.BATTERY_PROPERTY_CAPACITY
        )
    }

}
