package com.alibaba.weex.component;

import android.content.Context;
import android.support.annotation.NonNull;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebSettings;
import android.webkit.WebView;

import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.dom.WXDomObject;
import com.taobao.weex.ui.component.WXComponent;
import com.taobao.weex.ui.component.WXComponentProp;
import com.taobao.weex.ui.component.WXVContainer;

/**
 * Created by jiangdikai on 2017/2/20.
 */

public class MyWebView extends WXComponent<WebView> {
    private final WXSDKInstance instance;
    private WebView mWebView;
    private WebSettings mWebSetting;

    public MyWebView(WXSDKInstance instance, WXDomObject dom, WXVContainer parent, boolean isLazy) {
        super(instance, dom, parent);
        this.instance = instance;
    }

    @Override
    protected WebView initComponentHostView(@NonNull Context context) {
        mWebView = new WebView(context);
        mWebView.setLayoutParams(new ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
        mWebSetting = mWebView.getSettings();
        mWebView.getSettings().setJavaScriptEnabled(true);
        mWebView.getSettings().setCacheMode(WebSettings.LOAD_CACHE_ELSE_NETWORK);
        // 开启DOM storage API 功能
        mWebView.getSettings().setDomStorageEnabled(true);
        // 开启database storage API功能
        mWebView.getSettings().setDatabaseEnabled(true);
        // 开启Application Cache功能
        mWebView.getSettings().setAppCacheEnabled(true);
        mWebView.setOnTouchListener(new View.OnTouchListener() {

            @Override
            public boolean onTouch(View v, MotionEvent ev) {

                ((WebView)v).requestDisallowInterceptTouchEvent(true);


                return false;
            }
        });

        return mWebView;
    }

    @WXComponentProp(name = "loadweb")
    public void loadWeb(String loadhtml) {
//        Toast.makeText(instance.getContext(), "tel", Toast.LENGTH_SHORT).show();
        String css = "<link rel=\"stylesheet\"、 href=\"file:///android_asset/news.css\" type=\"text/css\">";
        String html = "<html><head>" + css + "</head><body>" + loadhtml + "</body></html>";
        html = html.replace("<div class=\"img-place-holder\">", "");
        mWebView.loadDataWithBaseURL("x-data://base", html, "text/html", "UTF-8", null);
    }
}
