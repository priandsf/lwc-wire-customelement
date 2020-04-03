/*
    Copyright (c) 2020, salesforce.com, inc.
    All rights reserved.
    SPDX-License-Identifier: BSD-3-Clause
    For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
*/

// Do not use native shadow DOM as it breaks bootstrap
// This should be added before the LWC engine else it has some unpredictable results
import "@lwc/synthetic-shadow"

/* eslint-disable no-undef */
import { createElement, register } from "lwc";

// The wire service has to be registered once
import { registerWireService } from 'wire-service';
registerWireService(register)

// Import this web components to get them loaded and registered
import Body from "app/body";
import {CUSTOM_ELEMENT} from "./options";

if(!CUSTOM_ELEMENT) {
    document.getElementById("main").appendChild(createElement("app-body", { is: Body }));
}
