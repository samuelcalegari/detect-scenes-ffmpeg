# Video Scene Detection with node.js

This library ma  , make sure you have [ffmpeg](http://www.ffmpeg.org/) installed on your system.

## Installation

Via npm : 

`$ npm install @samuelcalegari/ds_ffmpeg`

## API

`ds_ffmpeg(videoPath,filterValue)`
* videoPath : path to video file
* filterValue : filter value, float between 0 and 1 (default value : 0.3)
* returns array of float

## Usage

```
const ds_ffmpeg = require("@samuelcalegari/ds_ffmpeg")

ds_ffmpeg('input.mp4',0.1)
    .then(function(r){ 
	    console.log(r);
    })
    .catch(function(error) {
	    console.error(error);
    });
```

## Bugs and Issues

If you encounter any bugs or issues, feel free to open an issue at [github](https://github.com/samuelcalegari/ds_ffmpeg).


## Licence

```
Copyright © 2019, Samuel Calegari.

All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this
  list of conditions and the following disclaimer in the documentation and/or
  other materials provided with the distribution.
* Neither the name Crypto-JS nor the names of its contributors may be used to
  endorse or promote products derived from this software without specific prior
  written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.