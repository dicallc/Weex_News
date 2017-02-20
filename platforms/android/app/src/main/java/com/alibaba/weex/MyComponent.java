package com.alibaba.weex;

import android.content.Context;
import android.support.annotation.NonNull;
import android.text.method.LinkMovementMethod;
import android.widget.TextView;
import android.widget.Toast;

import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.dom.WXDomObject;
import com.taobao.weex.ui.component.WXComponent;
import com.taobao.weex.ui.component.WXComponentProp;
import com.taobao.weex.ui.component.WXVContainer;

/**
 * Created by jiangdikai on 2017/2/17.
 */

public class MyComponent extends WXComponent<TextView> {
    private final WXSDKInstance instance;
    private TextView textView;

    public MyComponent(WXSDKInstance instance, WXDomObject dom, WXVContainer parent, boolean isLazy) {
        super(instance, dom, parent);
        this.instance=instance;
    }

    @Override
    protected TextView initComponentHostView(@NonNull Context context) {
        textView = new TextView(context);
        textView.setMovementMethod(LinkMovementMethod.getInstance());
        textView.setBackgroundColor(instance.getContext().getResources().getColor(R.color.colorAccent));

        return textView;
    }

    @WXComponentProp(name = "showtoast")
    public void showToast(String tel){
        Toast.makeText(instance.getContext(), "tel", Toast.LENGTH_SHORT).show();
        textView.setText(tel);
    }
}
