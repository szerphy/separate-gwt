package com.zerphy.separategwt.gwt.client;

import org.fusesource.restygwt.client.dispatcher.DefaultFilterawareDispatcher;

public class RestDispatcher extends DefaultFilterawareDispatcher {

    public RestDispatcher() {
        addFilter(new JwtAuthDispatcherFilter());
    }
}
