package com.kirakira.app

import android.app.Activity
import android.os.Bundle
import android.webkit.JavascriptInterface
import android.webkit.WebView

class MainActivity : Activity() {
    class Bridge {
        @JavascriptInterface
        fun version(): String = "${BuildConfig.VERSION_NAME}|${BuildConfig.VERSION_CODE}"
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val web = WebView(this)
        web.settings.javaScriptEnabled = true
        web.settings.domStorageEnabled = true
        web.addJavascriptInterface(Bridge(), "App")
        web.loadUrl("file:///android_asset/index.html")
        setContentView(web)
    }
}
