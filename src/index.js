/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2019 Looker Data Sciences, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

import { connectExtensionHost } from "@looker/extension-sdk"

(function () {
  // Extensions currently require a chatty connection with the Looker host.
  // Removing this requirement currently under considertion.
  connectExtensionHost()
  document.write(`
  <style>
    body {
      font-family: -apple-system, system-ui, BlinkMacSystemFont;
      text-align:center;
      font-variant-numeric: tabular-nums;
    }
    .butt {
      font-size: 100px;
      background: salmon;
      border-radius: 250px;
      padding: 20px;
      display: inline-block;
      min-width: 200px;
      user-select: none;
    }
    .butt:active {
      background-color: orangered;
    }
    .webpage {
      padding: 100px 0;
    }
  </style>
  <div class="webpage">
    <h1>I love apps!</h1>
    <h3>This number will increase by one upon every click:</h3>
    <div class="butt" onclick="event.target.innerHTML = +event.target.innerHTML + (event.shiftKey ? -1 : 1); event.preventDefault
    ()">0</div>
    <h3>I hope you had fun on this Looker application.</h3>
    <img width="64" src="https://www.archiveteam.org/images/8/8b/Underconstruction.gif" />
  </div>
`)

})()
