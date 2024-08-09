(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_1160679F_2334_2580_41CA_F9E099E1232D], 'cardboardAvailable'); this.visibleComponentsIfPlayerFlagEnabled([this.Button_485BFF41_598E_3DB2_41A9_33F36E014467], 'gyroscopeAvailable'); this.syncPlaylists([this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist,this.DropDown_039BA88A_22FC_6B80_41C4_58820562B7EC_playlist,this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A].forEach(function(component) { component.set('visible', false); }) }",
 "vrPolyfillScale": 0.5,
 "paddingLeft": 0,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_0C5F33A8_3BA0_A6FF_41C3_2A6652E2CE94",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.Label_0C5F13A8_3BA0_A6FF_41BD_E3D21CFCE151"
 ],
 "scrollBarWidth": 10,
 "minWidth": 20,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "Player",
 "overflow": "visible",
 "verticalAlign": "top",
 "desktopMipmappingEnabled": false,
 "propagateClick": true,
 "backgroundPreloadEnabled": true,
 "buttonToggleMute": "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "paddingRight": 0,
 "definitions": [{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 174.02,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_03B844F1_2D3C_5B80_41B5_54C993954661",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 142
 },
 "id": "panorama_10F46F93_232C_2580_41AC_7731FE656D63_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_19F18C1C_07DC_A04A_4183_84CC8818C930_t.jpg",
 "partial": false,
 "label": "Bedroom 2 entrance",
 "id": "panorama_19F18C1C_07DC_A04A_4183_84CC8818C930",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F18C1C_07DC_A04A_4183_84CC8818C930_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F18C1C_07DC_A04A_4183_84CC8818C930_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F18C1C_07DC_A04A_4183_84CC8818C930_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F18C1C_07DC_A04A_4183_84CC8818C930_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F18C1C_07DC_A04A_4183_84CC8818C930_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F18C1C_07DC_A04A_4183_84CC8818C930_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F18C1C_07DC_A04A_4183_84CC8818C930_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F18C1C_07DC_A04A_4183_84CC8818C930_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F18C1C_07DC_A04A_4183_84CC8818C930_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F18C1C_07DC_A04A_4183_84CC8818C930_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F18C1C_07DC_A04A_4183_84CC8818C930_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F18C1C_07DC_A04A_4183_84CC8818C930_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_19F18C1C_07DC_A04A_4183_84CC8818C930_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F18C1C_07DC_A04A_4183_84CC8818C930_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F18C1C_07DC_A04A_4183_84CC8818C930_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F18C1C_07DC_A04A_4183_84CC8818C930_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F18C1C_07DC_A04A_4183_84CC8818C930_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F18C1C_07DC_A04A_4183_84CC8818C930_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F18C1C_07DC_A04A_4183_84CC8818C930_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_198BEBAE_07DC_A047_419A_778EFBAF096B",
   "class": "AdjacentPanorama",
   "yaw": -1.83,
   "distance": 1,
   "backwardYaw": 175.6
  },
  {
   "panorama": "this.panorama_198BBA63_07DC_E0FE_419D_725ED087C58E",
   "class": "AdjacentPanorama",
   "yaw": -141.89,
   "distance": 1,
   "backwardYaw": 37.61
  }
 ],
 "hfovMax": 146,
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_348C3BEC_2337_E444_41AA_EE2A68E73595",
  "this.overlay_3B725C5C_2334_1C44_41B8_B8F1E7D31B4E"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_10F59B96_232F_ED80_41C0_69FE70F15D69_t.jpg",
 "partial": false,
 "label": "Kitchen entrance 1b",
 "id": "panorama_10F59B96_232F_ED80_41C0_69FE70F15D69",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10F59B96_232F_ED80_41C0_69FE70F15D69_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10F59B96_232F_ED80_41C0_69FE70F15D69_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10F59B96_232F_ED80_41C0_69FE70F15D69_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10F59B96_232F_ED80_41C0_69FE70F15D69_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10F59B96_232F_ED80_41C0_69FE70F15D69_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10F59B96_232F_ED80_41C0_69FE70F15D69_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10F59B96_232F_ED80_41C0_69FE70F15D69_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10F59B96_232F_ED80_41C0_69FE70F15D69_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10F59B96_232F_ED80_41C0_69FE70F15D69_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10F59B96_232F_ED80_41C0_69FE70F15D69_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10F59B96_232F_ED80_41C0_69FE70F15D69_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10F59B96_232F_ED80_41C0_69FE70F15D69_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_10F59B96_232F_ED80_41C0_69FE70F15D69_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10F59B96_232F_ED80_41C0_69FE70F15D69_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10F59B96_232F_ED80_41C0_69FE70F15D69_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10F59B96_232F_ED80_41C0_69FE70F15D69_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10F59B96_232F_ED80_41C0_69FE70F15D69_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10F59B96_232F_ED80_41C0_69FE70F15D69_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10F59B96_232F_ED80_41C0_69FE70F15D69_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_10E028FA_232C_2B83_41BB_08FA880BD4BE",
   "class": "AdjacentPanorama",
   "yaw": -6.6,
   "distance": 1,
   "backwardYaw": 176.03
  },
  {
   "panorama": "this.panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B",
   "class": "AdjacentPanorama",
   "yaw": 152.67,
   "distance": 1,
   "backwardYaw": 95.14
  }
 ],
 "hfovMax": 146,
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_1E55D175_22DC_FA80_41CA_6E71B7D92F5E",
  "this.overlay_1DA29D1D_22DC_EA80_41B3_01D9092DA024"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_19881EC8_07DF_A1CB_41A3_BC63A466A66E_t.jpg",
 "partial": false,
 "label": "Walking Closet 1",
 "id": "panorama_19881EC8_07DF_A1CB_41A3_BC63A466A66E",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19881EC8_07DF_A1CB_41A3_BC63A466A66E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19881EC8_07DF_A1CB_41A3_BC63A466A66E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19881EC8_07DF_A1CB_41A3_BC63A466A66E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19881EC8_07DF_A1CB_41A3_BC63A466A66E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19881EC8_07DF_A1CB_41A3_BC63A466A66E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19881EC8_07DF_A1CB_41A3_BC63A466A66E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19881EC8_07DF_A1CB_41A3_BC63A466A66E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19881EC8_07DF_A1CB_41A3_BC63A466A66E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19881EC8_07DF_A1CB_41A3_BC63A466A66E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19881EC8_07DF_A1CB_41A3_BC63A466A66E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19881EC8_07DF_A1CB_41A3_BC63A466A66E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19881EC8_07DF_A1CB_41A3_BC63A466A66E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_19881EC8_07DF_A1CB_41A3_BC63A466A66E_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19881EC8_07DF_A1CB_41A3_BC63A466A66E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19881EC8_07DF_A1CB_41A3_BC63A466A66E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19881EC8_07DF_A1CB_41A3_BC63A466A66E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19881EC8_07DF_A1CB_41A3_BC63A466A66E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19881EC8_07DF_A1CB_41A3_BC63A466A66E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19881EC8_07DF_A1CB_41A3_BC63A466A66E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E",
   "class": "AdjacentPanorama",
   "yaw": -163.49,
   "distance": 1,
   "backwardYaw": -2.21
  },
  {
   "panorama": "this.panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3",
   "class": "AdjacentPanorama",
   "yaw": -86.62,
   "distance": 1,
   "backwardYaw": 83.08
  }
 ],
 "hfovMax": 146,
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_37208BDD_22D4_2444_415A_6DD369575705",
  "this.overlay_3757340D_22D4_23C4_41A1_2B8C6A5A6DB3"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 142
 },
 "id": "panorama_1988DB90_07DC_E05A_415A_E9B6E7B6A3D8_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 43.77,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_03AFD4C0_2D3C_5B80_41A8_8AEC578FBA8D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.17,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_036C163E_2D3C_2680_41C2_AE9B9850E11B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 19.27,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_015ED11A_2D3C_5A83_41A5_1BDF0CB3CEC6",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_14AC3ED3_055C_A1DE_41A5_F53A027E9489",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_14AC3ED3_055C_A1DE_41A5_F53A027E9489_camera"
  },
  {
   "media": "this.panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C_camera"
  },
  {
   "media": "this.panorama_198C60E8_07DC_A1CA_41AC_D33D2FD1B457",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_198C60E8_07DC_A1CA_41AC_D33D2FD1B457_camera"
  },
  {
   "media": "this.panorama_19F0C09C_07DC_A04A_41AC_7F2BF7962EF7",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_19F0C09C_07DC_A04A_41AC_7F2BF7962EF7_camera"
  },
  {
   "media": "this.panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5_camera"
  },
  {
   "media": "this.panorama_19F7CD1D_07DC_E04A_419C_75371A6181CE",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_19F7CD1D_07DC_E04A_419C_75371A6181CE_camera"
  },
  {
   "media": "this.panorama_1988DB90_07DC_E05A_415A_E9B6E7B6A3D8",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1988DB90_07DC_E05A_415A_E9B6E7B6A3D8_camera"
  },
  {
   "media": "this.panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A_camera"
  },
  {
   "media": "this.panorama_1988B03D_07DC_604A_41A0_B22C45008018",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1988B03D_07DC_604A_41A0_B22C45008018_camera"
  },
  {
   "media": "this.panorama_19F522E4_07DC_61FB_41A3_970281A6101B",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_19F522E4_07DC_61FB_41A3_970281A6101B_camera"
  },
  {
   "media": "this.panorama_19884912_07DF_A05E_4183_FBFCC0C02AF6",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_19884912_07DF_A05E_4183_FBFCC0C02AF6_camera"
  },
  {
   "media": "this.panorama_19F33EFF_07DF_A1C5_4187_DFFFB19DAA9C",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_19F33EFF_07DF_A1C5_4187_DFFFB19DAA9C_camera"
  },
  {
   "media": "this.panorama_198842E3_07DF_E1FD_41A9_B1A5FD362921",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_198842E3_07DF_E1FD_41A9_B1A5FD362921_camera"
  },
  {
   "media": "this.panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3_camera"
  },
  {
   "media": "this.panorama_19881EC8_07DF_A1CB_41A3_BC63A466A66E",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_19881EC8_07DF_A1CB_41A3_BC63A466A66E_camera"
  },
  {
   "media": "this.panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E_camera"
  },
  {
   "media": "this.panorama_198BEBAE_07DC_A047_419A_778EFBAF096B",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_198BEBAE_07DC_A047_419A_778EFBAF096B_camera"
  },
  {
   "media": "this.panorama_19F18C1C_07DC_A04A_4183_84CC8818C930",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_19F18C1C_07DC_A04A_4183_84CC8818C930_camera"
  },
  {
   "media": "this.panorama_198BBA63_07DC_E0FE_419D_725ED087C58E",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_198BBA63_07DC_E0FE_419D_725ED087C58E_camera"
  },
  {
   "media": "this.panorama_19F10857_07DC_E0C6_41A1_403B4A37CEAD",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_19F10857_07DC_E0C6_41A1_403B4A37CEAD_camera"
  },
  {
   "media": "this.panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B_camera"
  },
  {
   "media": "this.panorama_10F59B96_232F_ED80_41C0_69FE70F15D69",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_10F59B96_232F_ED80_41C0_69FE70F15D69_camera"
  },
  {
   "media": "this.panorama_10E028FA_232C_2B83_41BB_08FA880BD4BE",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_10E028FA_232C_2B83_41BB_08FA880BD4BE_camera"
  },
  {
   "media": "this.panorama_10F43664_232C_2680_41C4_3D6C271F7126",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_10F43664_232C_2680_41C4_3D6C271F7126_camera"
  },
  {
   "media": "this.panorama_10E093C1_232C_5D80_41C1_531C0DCD465E",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_10E093C1_232C_5D80_41C1_531C0DCD465E_camera"
  },
  {
   "media": "this.panorama_10E0012F_232C_5A81_41C8_2D2AD8D8E8C7",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_10E0012F_232C_5A81_41C8_2D2AD8D8E8C7_camera"
  },
  {
   "media": "this.panorama_10F46F93_232C_2580_41AC_7731FE656D63",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_10F46F93_232C_2580_41AC_7731FE656D63_camera"
  },
  {
   "media": "this.panorama_10E1BD44_232C_2A80_41A1_41528897E575",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 0)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_10E1BD44_232C_2A80_41A1_41528897E575_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 142
 },
 "id": "panorama_10F59B96_232F_ED80_41C0_69FE70F15D69_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 142
 },
 "id": "panorama_198BEBAE_07DC_A047_419A_778EFBAF096B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 142
 },
 "id": "panorama_1988B03D_07DC_604A_41A0_B22C45008018_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 28.31,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_02F8621C_2D3C_5E80_41C0_8DF0EC82BC71",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -12.38,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_02D1C1F9_2D3C_5D80_41C6_32D2A7962293",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 123.15,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_02A6E1B5_2D3C_5D80_41C0_2A186DB13FAD",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 10.47,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_01461109_2D3C_5A81_41AC_688A0CC9E15B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 142
 },
 "id": "panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 142
 },
 "id": "panorama_19F18C1C_07DC_A04A_4183_84CC8818C930_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -41.4,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_0388E413_2D3C_5A81_41C4_7B8CC678B4FF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_10F46F93_232C_2580_41AC_7731FE656D63_t.jpg",
 "partial": false,
 "label": "Bedroom entrance 1b",
 "id": "panorama_10F46F93_232C_2580_41AC_7731FE656D63",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10F46F93_232C_2580_41AC_7731FE656D63_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10F46F93_232C_2580_41AC_7731FE656D63_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10F46F93_232C_2580_41AC_7731FE656D63_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10F46F93_232C_2580_41AC_7731FE656D63_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10F46F93_232C_2580_41AC_7731FE656D63_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10F46F93_232C_2580_41AC_7731FE656D63_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10F46F93_232C_2580_41AC_7731FE656D63_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10F46F93_232C_2580_41AC_7731FE656D63_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10F46F93_232C_2580_41AC_7731FE656D63_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10F46F93_232C_2580_41AC_7731FE656D63_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10F46F93_232C_2580_41AC_7731FE656D63_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10F46F93_232C_2580_41AC_7731FE656D63_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_10F46F93_232C_2580_41AC_7731FE656D63_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10F46F93_232C_2580_41AC_7731FE656D63_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10F46F93_232C_2580_41AC_7731FE656D63_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10F46F93_232C_2580_41AC_7731FE656D63_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10F46F93_232C_2580_41AC_7731FE656D63_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10F46F93_232C_2580_41AC_7731FE656D63_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10F46F93_232C_2580_41AC_7731FE656D63_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_10E1BD44_232C_2A80_41A1_41528897E575",
   "class": "AdjacentPanorama",
   "yaw": -34.24,
   "distance": 1,
   "backwardYaw": 138.6
  },
  {
   "panorama": "this.panorama_10E093C1_232C_5D80_41C1_531C0DCD465E",
   "class": "AdjacentPanorama",
   "yaw": 157.19,
   "distance": 1,
   "backwardYaw": -89
  }
 ],
 "hfovMax": 146,
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_183B8625_22D4_6680_41B6_D01FBEBB4794",
  "this.overlay_18695D69_22EB_EA80_419A_7C4BBC3590F1"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 142
 },
 "id": "panorama_19F7CD1D_07DC_E04A_419C_75371A6181CE_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 142
 },
 "id": "panorama_19F33EFF_07DF_A1C5_4187_DFFFB19DAA9C_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -103.07,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_035DB62D_2D3C_2680_41C6_72B1B8CF2DBF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 142
 },
 "id": "panorama_10F43664_232C_2680_41C4_3D6C271F7126_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.48,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_024F1318_2D3C_5E80_4164_7BEFEE9B0578",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 142
 },
 "id": "panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 142
 },
 "id": "panorama_10E1BD44_232C_2A80_41A1_41528897E575_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_19884912_07DF_A05E_4183_FBFCC0C02AF6_t.jpg",
 "partial": false,
 "label": "Bedroom 1 entrance",
 "id": "panorama_19884912_07DF_A05E_4183_FBFCC0C02AF6",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19884912_07DF_A05E_4183_FBFCC0C02AF6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19884912_07DF_A05E_4183_FBFCC0C02AF6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19884912_07DF_A05E_4183_FBFCC0C02AF6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19884912_07DF_A05E_4183_FBFCC0C02AF6_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19884912_07DF_A05E_4183_FBFCC0C02AF6_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19884912_07DF_A05E_4183_FBFCC0C02AF6_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19884912_07DF_A05E_4183_FBFCC0C02AF6_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19884912_07DF_A05E_4183_FBFCC0C02AF6_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19884912_07DF_A05E_4183_FBFCC0C02AF6_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19884912_07DF_A05E_4183_FBFCC0C02AF6_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19884912_07DF_A05E_4183_FBFCC0C02AF6_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19884912_07DF_A05E_4183_FBFCC0C02AF6_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_19884912_07DF_A05E_4183_FBFCC0C02AF6_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19884912_07DF_A05E_4183_FBFCC0C02AF6_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19884912_07DF_A05E_4183_FBFCC0C02AF6_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19884912_07DF_A05E_4183_FBFCC0C02AF6_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19884912_07DF_A05E_4183_FBFCC0C02AF6_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19884912_07DF_A05E_4183_FBFCC0C02AF6_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19884912_07DF_A05E_4183_FBFCC0C02AF6_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_19F33EFF_07DF_A1C5_4187_DFFFB19DAA9C",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 146,
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_36D16213_22F4_27DC_41B6_09334451C28F",
  "this.overlay_312B0DFF_22F4_7C44_4190_084D5942999A"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_198842E3_07DF_E1FD_41A9_B1A5FD362921_t.jpg",
 "partial": false,
 "label": "Walking closet entrance",
 "id": "panorama_198842E3_07DF_E1FD_41A9_B1A5FD362921",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_198842E3_07DF_E1FD_41A9_B1A5FD362921_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_198842E3_07DF_E1FD_41A9_B1A5FD362921_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_198842E3_07DF_E1FD_41A9_B1A5FD362921_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_198842E3_07DF_E1FD_41A9_B1A5FD362921_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_198842E3_07DF_E1FD_41A9_B1A5FD362921_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_198842E3_07DF_E1FD_41A9_B1A5FD362921_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_198842E3_07DF_E1FD_41A9_B1A5FD362921_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_198842E3_07DF_E1FD_41A9_B1A5FD362921_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_198842E3_07DF_E1FD_41A9_B1A5FD362921_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_198842E3_07DF_E1FD_41A9_B1A5FD362921_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_198842E3_07DF_E1FD_41A9_B1A5FD362921_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_198842E3_07DF_E1FD_41A9_B1A5FD362921_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_198842E3_07DF_E1FD_41A9_B1A5FD362921_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_198842E3_07DF_E1FD_41A9_B1A5FD362921_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_198842E3_07DF_E1FD_41A9_B1A5FD362921_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_198842E3_07DF_E1FD_41A9_B1A5FD362921_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_198842E3_07DF_E1FD_41A9_B1A5FD362921_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_198842E3_07DF_E1FD_41A9_B1A5FD362921_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_198842E3_07DF_E1FD_41A9_B1A5FD362921_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_19F33EFF_07DF_A1C5_4187_DFFFB19DAA9C",
   "class": "AdjacentPanorama",
   "yaw": 13.12,
   "distance": 1,
   "backwardYaw": -131.14
  },
  {
   "panorama": "this.panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3",
   "class": "AdjacentPanorama",
   "yaw": 160.58,
   "distance": 1,
   "backwardYaw": -7.23
  }
 ],
 "hfovMax": 146,
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_360C350A_22DC_2DCC_41BE_853F12B499D6",
  "this.overlay_37BD7BC5_22DC_2447_419E_025D4281ED52"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 142
 },
 "id": "panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 165.61,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_03338602_2D3C_2680_41AC_06250F001BBD",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_10E1BD44_232C_2A80_41A1_41528897E575_t.jpg",
 "partial": false,
 "label": "Bedroom",
 "id": "panorama_10E1BD44_232C_2A80_41A1_41528897E575",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10E1BD44_232C_2A80_41A1_41528897E575_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10E1BD44_232C_2A80_41A1_41528897E575_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10E1BD44_232C_2A80_41A1_41528897E575_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10E1BD44_232C_2A80_41A1_41528897E575_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10E1BD44_232C_2A80_41A1_41528897E575_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10E1BD44_232C_2A80_41A1_41528897E575_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10E1BD44_232C_2A80_41A1_41528897E575_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10E1BD44_232C_2A80_41A1_41528897E575_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10E1BD44_232C_2A80_41A1_41528897E575_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10E1BD44_232C_2A80_41A1_41528897E575_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10E1BD44_232C_2A80_41A1_41528897E575_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10E1BD44_232C_2A80_41A1_41528897E575_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_10E1BD44_232C_2A80_41A1_41528897E575_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10E1BD44_232C_2A80_41A1_41528897E575_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10E1BD44_232C_2A80_41A1_41528897E575_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10E1BD44_232C_2A80_41A1_41528897E575_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10E1BD44_232C_2A80_41A1_41528897E575_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10E1BD44_232C_2A80_41A1_41528897E575_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10E1BD44_232C_2A80_41A1_41528897E575_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_10F46F93_232C_2580_41AC_7731FE656D63",
   "class": "AdjacentPanorama",
   "yaw": 138.6,
   "distance": 1,
   "backwardYaw": -34.24
  }
 ],
 "hfovMax": 146,
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_1833A4D5_22EC_5B80_41B5_C633EA9E9951"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_14AC3ED3_055C_A1DE_41A5_F53A027E9489",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_14AC3ED3_055C_A1DE_41A5_F53A027E9489_camera"
  },
  {
   "media": "this.panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C_camera"
  },
  {
   "media": "this.panorama_198C60E8_07DC_A1CA_41AC_D33D2FD1B457",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_198C60E8_07DC_A1CA_41AC_D33D2FD1B457_camera"
  },
  {
   "media": "this.panorama_19F0C09C_07DC_A04A_41AC_7F2BF7962EF7",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_19F0C09C_07DC_A04A_41AC_7F2BF7962EF7_camera"
  },
  {
   "media": "this.panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5_camera"
  },
  {
   "media": "this.panorama_19F7CD1D_07DC_E04A_419C_75371A6181CE",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_19F7CD1D_07DC_E04A_419C_75371A6181CE_camera"
  },
  {
   "media": "this.panorama_1988DB90_07DC_E05A_415A_E9B6E7B6A3D8",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1988DB90_07DC_E05A_415A_E9B6E7B6A3D8_camera"
  },
  {
   "media": "this.panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A_camera"
  },
  {
   "media": "this.panorama_1988B03D_07DC_604A_41A0_B22C45008018",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1988B03D_07DC_604A_41A0_B22C45008018_camera"
  },
  {
   "media": "this.panorama_19F522E4_07DC_61FB_41A3_970281A6101B",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_19F522E4_07DC_61FB_41A3_970281A6101B_camera"
  },
  {
   "media": "this.panorama_19884912_07DF_A05E_4183_FBFCC0C02AF6",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_19884912_07DF_A05E_4183_FBFCC0C02AF6_camera"
  },
  {
   "media": "this.panorama_19F33EFF_07DF_A1C5_4187_DFFFB19DAA9C",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_19F33EFF_07DF_A1C5_4187_DFFFB19DAA9C_camera"
  },
  {
   "media": "this.panorama_198842E3_07DF_E1FD_41A9_B1A5FD362921",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_198842E3_07DF_E1FD_41A9_B1A5FD362921_camera"
  },
  {
   "media": "this.panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3_camera"
  },
  {
   "media": "this.panorama_19881EC8_07DF_A1CB_41A3_BC63A466A66E",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_19881EC8_07DF_A1CB_41A3_BC63A466A66E_camera"
  },
  {
   "media": "this.panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E_camera"
  },
  {
   "media": "this.panorama_198BEBAE_07DC_A047_419A_778EFBAF096B",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_198BEBAE_07DC_A047_419A_778EFBAF096B_camera"
  },
  {
   "media": "this.panorama_19F18C1C_07DC_A04A_4183_84CC8818C930",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_19F18C1C_07DC_A04A_4183_84CC8818C930_camera"
  },
  {
   "media": "this.panorama_198BBA63_07DC_E0FE_419D_725ED087C58E",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_198BBA63_07DC_E0FE_419D_725ED087C58E_camera"
  },
  {
   "media": "this.panorama_19F10857_07DC_E0C6_41A1_403B4A37CEAD",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_19F10857_07DC_E0C6_41A1_403B4A37CEAD_camera"
  },
  {
   "media": "this.panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B_camera"
  },
  {
   "media": "this.panorama_10F59B96_232F_ED80_41C0_69FE70F15D69",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_10F59B96_232F_ED80_41C0_69FE70F15D69_camera"
  },
  {
   "media": "this.panorama_10E028FA_232C_2B83_41BB_08FA880BD4BE",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_10E028FA_232C_2B83_41BB_08FA880BD4BE_camera"
  },
  {
   "media": "this.panorama_10F43664_232C_2680_41C4_3D6C271F7126",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_10F43664_232C_2680_41C4_3D6C271F7126_camera"
  },
  {
   "media": "this.panorama_10E093C1_232C_5D80_41C1_531C0DCD465E",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_10E093C1_232C_5D80_41C1_531C0DCD465E_camera"
  },
  {
   "media": "this.panorama_10E0012F_232C_5A81_41C8_2D2AD8D8E8C7",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_10E0012F_232C_5A81_41C8_2D2AD8D8E8C7_camera"
  },
  {
   "media": "this.panorama_10F46F93_232C_2580_41AC_7731FE656D63",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_10F46F93_232C_2580_41AC_7731FE656D63_camera"
  },
  {
   "media": "this.panorama_10E1BD44_232C_2A80_41A1_41528897E575",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 0)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_10E1BD44_232C_2A80_41A1_41528897E575_camera"
  }
 ],
 "id": "mainPlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 142
 },
 "id": "panorama_198C60E8_07DC_A1CA_41AC_D33D2FD1B457_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -22.81,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_02BD31C6_2D3C_5D80_41CB_8ED7CC2033F9",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_198BEBAE_07DC_A047_419A_778EFBAF096B_t.jpg",
 "partial": false,
 "label": "Bathroom entrance",
 "id": "panorama_198BEBAE_07DC_A047_419A_778EFBAF096B",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_198BEBAE_07DC_A047_419A_778EFBAF096B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_198BEBAE_07DC_A047_419A_778EFBAF096B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_198BEBAE_07DC_A047_419A_778EFBAF096B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_198BEBAE_07DC_A047_419A_778EFBAF096B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_198BEBAE_07DC_A047_419A_778EFBAF096B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_198BEBAE_07DC_A047_419A_778EFBAF096B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_198BEBAE_07DC_A047_419A_778EFBAF096B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_198BEBAE_07DC_A047_419A_778EFBAF096B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_198BEBAE_07DC_A047_419A_778EFBAF096B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_198BEBAE_07DC_A047_419A_778EFBAF096B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_198BEBAE_07DC_A047_419A_778EFBAF096B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_198BEBAE_07DC_A047_419A_778EFBAF096B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_198BEBAE_07DC_A047_419A_778EFBAF096B_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_198BEBAE_07DC_A047_419A_778EFBAF096B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_198BEBAE_07DC_A047_419A_778EFBAF096B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_198BEBAE_07DC_A047_419A_778EFBAF096B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_198BEBAE_07DC_A047_419A_778EFBAF096B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_198BEBAE_07DC_A047_419A_778EFBAF096B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_198BEBAE_07DC_A047_419A_778EFBAF096B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_19F522E4_07DC_61FB_41A3_970281A6101B",
   "class": "AdjacentPanorama",
   "yaw": -1.26,
   "distance": 1,
   "backwardYaw": -81.27
  },
  {
   "panorama": "this.panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E",
   "class": "AdjacentPanorama",
   "yaw": -97.22,
   "distance": 1,
   "backwardYaw": 76.93
  },
  {
   "panorama": "this.panorama_19F18C1C_07DC_A04A_4183_84CC8818C930",
   "class": "AdjacentPanorama",
   "yaw": 175.6,
   "distance": 1,
   "backwardYaw": -1.83
  }
 ],
 "hfovMax": 146,
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_35A3411D_232C_65C7_41B1_2371EF015A75",
  "this.overlay_343D9BD1_232C_245C_41B3_E00E1735FBC1",
  "this.overlay_3494DCD3_232C_3C5C_41B7_9D939A40EE83"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 142
 },
 "id": "panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.77,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_016FC13D_2D3C_5A81_41C8_3B4DDAA13CB9",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 142
 },
 "id": "panorama_14AC3ED3_055C_A1DE_41A5_F53A027E9489_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 142
 },
 "id": "panorama_19881EC8_07DF_A1CB_41A3_BC63A466A66E_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 142
 },
 "id": "panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -19.42,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_03DA8552_2D3C_5A83_41AA_5667C2B4F35F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.03,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_02F76236_2D3C_5E80_41A4_6592B24BDF31",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_039BA88A_22FC_6B80_41C4_58820562B7EC_playlist, 0, 1)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B_camera"
  },
  {
   "media": "this.panorama_10E028FA_232C_2B83_41BB_08FA880BD4BE",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_039BA88A_22FC_6B80_41C4_58820562B7EC_playlist, 1, 2)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_10E028FA_232C_2B83_41BB_08FA880BD4BE_camera"
  },
  {
   "media": "this.panorama_10F43664_232C_2680_41C4_3D6C271F7126",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_039BA88A_22FC_6B80_41C4_58820562B7EC_playlist, 2, 3)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_10F43664_232C_2680_41C4_3D6C271F7126_camera"
  },
  {
   "media": "this.panorama_10E093C1_232C_5D80_41C1_531C0DCD465E",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_039BA88A_22FC_6B80_41C4_58820562B7EC_playlist, 3, 4)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_10E093C1_232C_5D80_41C1_531C0DCD465E_camera"
  },
  {
   "media": "this.panorama_10E0012F_232C_5A81_41C8_2D2AD8D8E8C7",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_039BA88A_22FC_6B80_41C4_58820562B7EC_playlist, 4, 5)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_10E0012F_232C_5A81_41C8_2D2AD8D8E8C7_camera"
  },
  {
   "media": "this.panorama_10E1BD44_232C_2A80_41A1_41528897E575",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_039BA88A_22FC_6B80_41C4_58820562B7EC_playlist, 5, 0)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_10E1BD44_232C_2A80_41A1_41528897E575_camera"
  }
 ],
 "id": "DropDown_039BA88A_22FC_6B80_41C4_58820562B7EC_playlist"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 145.76,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_037FB650_2D3C_2680_41C2_949B7F63D670",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_19F10857_07DC_E0C6_41A1_403B4A37CEAD_t.jpg",
 "partial": false,
 "label": "Closet 2",
 "id": "panorama_19F10857_07DC_E0C6_41A1_403B4A37CEAD",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F10857_07DC_E0C6_41A1_403B4A37CEAD_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F10857_07DC_E0C6_41A1_403B4A37CEAD_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F10857_07DC_E0C6_41A1_403B4A37CEAD_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F10857_07DC_E0C6_41A1_403B4A37CEAD_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F10857_07DC_E0C6_41A1_403B4A37CEAD_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F10857_07DC_E0C6_41A1_403B4A37CEAD_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F10857_07DC_E0C6_41A1_403B4A37CEAD_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F10857_07DC_E0C6_41A1_403B4A37CEAD_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F10857_07DC_E0C6_41A1_403B4A37CEAD_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F10857_07DC_E0C6_41A1_403B4A37CEAD_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F10857_07DC_E0C6_41A1_403B4A37CEAD_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F10857_07DC_E0C6_41A1_403B4A37CEAD_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_19F10857_07DC_E0C6_41A1_403B4A37CEAD_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F10857_07DC_E0C6_41A1_403B4A37CEAD_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F10857_07DC_E0C6_41A1_403B4A37CEAD_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F10857_07DC_E0C6_41A1_403B4A37CEAD_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F10857_07DC_E0C6_41A1_403B4A37CEAD_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F10857_07DC_E0C6_41A1_403B4A37CEAD_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F10857_07DC_E0C6_41A1_403B4A37CEAD_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_198BBA63_07DC_E0FE_419D_725ED087C58E",
   "class": "AdjacentPanorama",
   "yaw": -3.52,
   "distance": 1,
   "backwardYaw": 85.85
  }
 ],
 "hfovMax": 146,
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_3BA70933_233B_E5DC_41B4_4F4A60516001"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_198BBA63_07DC_E0FE_419D_725ED087C58E_t.jpg",
 "partial": false,
 "label": "Bedroom 2",
 "id": "panorama_198BBA63_07DC_E0FE_419D_725ED087C58E",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_198BBA63_07DC_E0FE_419D_725ED087C58E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_198BBA63_07DC_E0FE_419D_725ED087C58E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_198BBA63_07DC_E0FE_419D_725ED087C58E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_198BBA63_07DC_E0FE_419D_725ED087C58E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_198BBA63_07DC_E0FE_419D_725ED087C58E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_198BBA63_07DC_E0FE_419D_725ED087C58E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_198BBA63_07DC_E0FE_419D_725ED087C58E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_198BBA63_07DC_E0FE_419D_725ED087C58E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_198BBA63_07DC_E0FE_419D_725ED087C58E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_198BBA63_07DC_E0FE_419D_725ED087C58E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_198BBA63_07DC_E0FE_419D_725ED087C58E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_198BBA63_07DC_E0FE_419D_725ED087C58E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_198BBA63_07DC_E0FE_419D_725ED087C58E_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_198BBA63_07DC_E0FE_419D_725ED087C58E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_198BBA63_07DC_E0FE_419D_725ED087C58E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_198BBA63_07DC_E0FE_419D_725ED087C58E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_198BBA63_07DC_E0FE_419D_725ED087C58E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_198BBA63_07DC_E0FE_419D_725ED087C58E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_198BBA63_07DC_E0FE_419D_725ED087C58E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_19F10857_07DC_E0C6_41A1_403B4A37CEAD",
   "class": "AdjacentPanorama",
   "yaw": 85.85,
   "distance": 1,
   "backwardYaw": -3.52
  },
  {
   "panorama": "this.panorama_19F18C1C_07DC_A04A_4183_84CC8818C930",
   "class": "AdjacentPanorama",
   "yaw": 37.61,
   "distance": 1,
   "backwardYaw": -141.89
  }
 ],
 "hfovMax": 146,
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_34FAB071_2334_245F_4190_67A1384BD4AA",
  "this.overlay_3BAF9242_2334_E7BD_41B1_EC76A20FD616"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 15.05,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_02031247_2D3C_5E80_41BF_EAEF33E87297",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -5.78,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_017D915E_2D3C_5A80_41CB_9D8B859D72E7",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -3.97,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_029CD192_2D3C_5D80_41A6_7D4735F6F5EB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 16.51,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_022B6268_2D3C_5E8F_4187_78634554C2B3",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E_t.jpg",
 "partial": false,
 "label": "Bathroom",
 "id": "panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_198BEBAE_07DC_A047_419A_778EFBAF096B",
   "class": "AdjacentPanorama",
   "yaw": 76.93,
   "distance": 1,
   "backwardYaw": -97.22
  },
  {
   "panorama": "this.panorama_19881EC8_07DF_A1CB_41A3_BC63A466A66E",
   "class": "AdjacentPanorama",
   "yaw": -2.21,
   "distance": 1,
   "backwardYaw": -163.49
  }
 ],
 "hfovMax": 146,
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_3505CC87_232C_1CC4_4175_E1149242402F",
  "this.overlay_355E9655_232C_2C47_41C0_A2F014D55E54"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -45.42,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_02C451E9_2D3C_5D80_41A9_1D5E7C64F5B9",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 82.78,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_021C6257_2D3C_5E81_41BA_F012BAF89A14",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "buttonToggleHotspots": "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "mouseControlMode": "drag_acceleration",
 "buttonCardboardView": [
  "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
  "this.IconButton_1160679F_2334_2580_41CA_F9E099E1232D"
 ],
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 91,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_0387A445_2D3C_5A80_41C7_6DBC0A335852",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -166.88,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_027FB3E0_2D3C_5DBF_41C5_60B0DF378CDB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -4.4,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_03E4D5AE_2D3C_2583_41C2_36FB50018CF9",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.74,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_028B816F_2D3C_5A80_41CC_3E72C0047E20",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "minHeight": 20,
 "closeButtonBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "id": "window_0B4D5204_22EC_5E80_41C6_290A56DA3DB1",
 "width": 200,
 "closeButtonBorderRadius": 11,
 "closeButtonPaddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "minWidth": 20,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonPaddingLeft": 0,
 "headerBackgroundOpacity": 1,
 "bodyPaddingLeft": 5,
 "paddingBottom": 0,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "paddingRight": 0,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "shadow": true,
 "height": 100,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "scrollBarVisible": "rollOver",
 "bodyBackgroundColorDirection": "vertical",
 "bodyPaddingTop": 5,
 "scrollBarColor": "#000000",
 "titleTextDecoration": "none",
 "closeButtonIconHeight": 12,
 "closeButtonPaddingTop": 0,
 "title": "",
 "gap": 5,
 "headerBackgroundColorDirection": "vertical",
 "bodyPaddingBottom": 5,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "shadowHorizontalLength": 3,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "titleFontColor": "#000000",
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "shadowSpread": 1,
 "closeButtonBorderColor": "#000000",
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "paddingLeft": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "shadowColor": "#000000",
 "shadowVerticalLength": 0,
 "layout": "vertical",
 "titleFontWeight": "normal",
 "children": [
  "this.htmlText_0B339205_22EC_5E80_419B_EB19C1388369"
 ],
 "footerHeight": 5,
 "closeButtonIconLineWidth": 2,
 "class": "Window",
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerBackgroundOpacity": 1,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "horizontalAlign": "center",
 "footerBorderColor": "#000000",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "footerBorderSize": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "closeButtonPaddingRight": 0,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window75616"
 },
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "contentOpaque": false,
 "closeButtonBorderSize": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -19.16,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_031125E0_2D3C_2580_41C7_BBA39CA5DBA9",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -94.15,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_0165C14D_2D3C_5A80_4193_4898DB129DFA",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 98.73,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_0343F613_2D3C_2680_41BD_E6D903707458",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -10.93,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_0306C5CF_2D3C_2580_41A4_41E0E797BD18",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A_t.jpg",
 "partial": false,
 "label": "Kitchen entrance",
 "id": "panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1988B03D_07DC_604A_41A0_B22C45008018",
   "class": "AdjacentPanorama",
   "yaw": -5.98,
   "distance": 1,
   "backwardYaw": -169.53
  },
  {
   "panorama": "this.panorama_1988B03D_07DC_604A_41A0_B22C45008018",
   "class": "AdjacentPanorama",
   "yaw": -151.69,
   "distance": 1,
   "backwardYaw": -169.53
  },
  {
   "panorama": "this.panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5",
   "class": "AdjacentPanorama",
   "yaw": -151.69,
   "distance": 1,
   "backwardYaw": -160.73
  }
 ],
 "hfovMax": 146,
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_2DB3372B_22DF_EDCC_41BF_C180F25E6E38",
  "this.overlay_3242738B_22DC_24C3_4192_3CFFF94EFC51"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 142
 },
 "id": "panorama_19F0C09C_07DC_A04A_41AC_7F2BF7962EF7_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5_t.jpg",
 "partial": false,
 "label": "Living room",
 "id": "panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A",
   "class": "AdjacentPanorama",
   "yaw": -160.73,
   "distance": 1,
   "backwardYaw": -151.69
  },
  {
   "panorama": "this.panorama_19F0C09C_07DC_A04A_41AC_7F2BF7962EF7",
   "class": "AdjacentPanorama",
   "yaw": 167.62,
   "distance": 1,
   "backwardYaw": -4.97
  },
  {
   "panorama": "this.panorama_19F7CD1D_07DC_E04A_419C_75371A6181CE",
   "class": "AdjacentPanorama",
   "yaw": -8.24,
   "distance": 1,
   "backwardYaw": -164.95
  }
 ],
 "hfovMax": 146,
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_320FDFF5_1B7D_9FDA_41A5_29D554F804B9",
  "this.overlay_33A88F35_1B7C_E05A_41A7_42C01111BE2E",
  "this.overlay_334F42DB_1B7C_E1CE_4192_59066DBDBDBE"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 171.76,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_03C8F522_2D3C_5A80_41AA_01F9A60A07D7",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 127.65,
  "pitch": -11.02,
  "hfov": 142
 },
 "id": "camera_02ECF20B_2D3C_5E80_41C3_8F1FBDC39585",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 23.42,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_0321D5F1_2D3C_2580_41AA_54BBBD3D07CC",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 142
 },
 "id": "panorama_198842E3_07DF_E1FD_41A9_B1A5FD362921_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 142
 },
 "id": "panorama_10E093C1_232C_5D80_41C1_531C0DCD465E_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -96.92,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_0233D2E5_2D3C_5F80_41C4_2F77484E90E4",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 142
 },
 "id": "panorama_198BBA63_07DC_E0FE_419D_725ED087C58E_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_19F7CD1D_07DC_E04A_419C_75371A6181CE_t.jpg",
 "partial": false,
 "label": "Patio 1",
 "id": "panorama_19F7CD1D_07DC_E04A_419C_75371A6181CE",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F7CD1D_07DC_E04A_419C_75371A6181CE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F7CD1D_07DC_E04A_419C_75371A6181CE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F7CD1D_07DC_E04A_419C_75371A6181CE_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F7CD1D_07DC_E04A_419C_75371A6181CE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F7CD1D_07DC_E04A_419C_75371A6181CE_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F7CD1D_07DC_E04A_419C_75371A6181CE_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F7CD1D_07DC_E04A_419C_75371A6181CE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F7CD1D_07DC_E04A_419C_75371A6181CE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F7CD1D_07DC_E04A_419C_75371A6181CE_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F7CD1D_07DC_E04A_419C_75371A6181CE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F7CD1D_07DC_E04A_419C_75371A6181CE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F7CD1D_07DC_E04A_419C_75371A6181CE_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_19F7CD1D_07DC_E04A_419C_75371A6181CE_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F7CD1D_07DC_E04A_419C_75371A6181CE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F7CD1D_07DC_E04A_419C_75371A6181CE_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F7CD1D_07DC_E04A_419C_75371A6181CE_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F7CD1D_07DC_E04A_419C_75371A6181CE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F7CD1D_07DC_E04A_419C_75371A6181CE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F7CD1D_07DC_E04A_419C_75371A6181CE_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5",
   "class": "AdjacentPanorama",
   "yaw": -164.95,
   "distance": 1,
   "backwardYaw": -8.24
  },
  {
   "panorama": "this.panorama_1988DB90_07DC_E05A_415A_E9B6E7B6A3D8",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 146,
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_332A2A58_1B44_60CA_41A2_0DD8BAD218C4",
  "this.overlay_3D7CFBB3_232C_24DC_41BC_B2BB7713EB39"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 48.86,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_0157A12B_2D3C_5A81_41B5_2741A816E4F6",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 10.47,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_014E60F5_2D3C_5B81_41BE_6C9BBAD3E939",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 169.63,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_02C8D1D7_2D3C_5D80_41C9_76B9720421D3",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_19F522E4_07DC_61FB_41A3_970281A6101B_t.jpg",
 "partial": false,
 "label": "Hallway 2nd floor",
 "id": "panorama_19F522E4_07DC_61FB_41A3_970281A6101B",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F522E4_07DC_61FB_41A3_970281A6101B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F522E4_07DC_61FB_41A3_970281A6101B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F522E4_07DC_61FB_41A3_970281A6101B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F522E4_07DC_61FB_41A3_970281A6101B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F522E4_07DC_61FB_41A3_970281A6101B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F522E4_07DC_61FB_41A3_970281A6101B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F522E4_07DC_61FB_41A3_970281A6101B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F522E4_07DC_61FB_41A3_970281A6101B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F522E4_07DC_61FB_41A3_970281A6101B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F522E4_07DC_61FB_41A3_970281A6101B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F522E4_07DC_61FB_41A3_970281A6101B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F522E4_07DC_61FB_41A3_970281A6101B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_19F522E4_07DC_61FB_41A3_970281A6101B_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F522E4_07DC_61FB_41A3_970281A6101B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F522E4_07DC_61FB_41A3_970281A6101B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F522E4_07DC_61FB_41A3_970281A6101B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F522E4_07DC_61FB_41A3_970281A6101B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F522E4_07DC_61FB_41A3_970281A6101B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F522E4_07DC_61FB_41A3_970281A6101B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C",
   "class": "AdjacentPanorama",
   "yaw": 169.07,
   "distance": 1,
   "backwardYaw": 174.22
  },
  {
   "panorama": "this.panorama_19884912_07DF_A05E_4183_FBFCC0C02AF6",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_198BEBAE_07DC_A047_419A_778EFBAF096B",
   "class": "AdjacentPanorama",
   "yaw": -81.27,
   "distance": 1,
   "backwardYaw": -1.26
  }
 ],
 "hfovMax": 146,
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_3388CB0A_22D4_65CD_41B3_ECAD55567A76",
  "this.overlay_3040338C_22D4_24C5_41B1_671DE73681FB",
  "this.overlay_3FAD0799_2335_ECCF_41BA_4C28BE3FB955"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_10E093C1_232C_5D80_41C1_531C0DCD465E_t.jpg",
 "partial": false,
 "label": "Hallway",
 "id": "panorama_10E093C1_232C_5D80_41C1_531C0DCD465E",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10E093C1_232C_5D80_41C1_531C0DCD465E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10E093C1_232C_5D80_41C1_531C0DCD465E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10E093C1_232C_5D80_41C1_531C0DCD465E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10E093C1_232C_5D80_41C1_531C0DCD465E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10E093C1_232C_5D80_41C1_531C0DCD465E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10E093C1_232C_5D80_41C1_531C0DCD465E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10E093C1_232C_5D80_41C1_531C0DCD465E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10E093C1_232C_5D80_41C1_531C0DCD465E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10E093C1_232C_5D80_41C1_531C0DCD465E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10E093C1_232C_5D80_41C1_531C0DCD465E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10E093C1_232C_5D80_41C1_531C0DCD465E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10E093C1_232C_5D80_41C1_531C0DCD465E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_10E093C1_232C_5D80_41C1_531C0DCD465E_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10E093C1_232C_5D80_41C1_531C0DCD465E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10E093C1_232C_5D80_41C1_531C0DCD465E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10E093C1_232C_5D80_41C1_531C0DCD465E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10E093C1_232C_5D80_41C1_531C0DCD465E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10E093C1_232C_5D80_41C1_531C0DCD465E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10E093C1_232C_5D80_41C1_531C0DCD465E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_10F43664_232C_2680_41C4_3D6C271F7126",
   "class": "AdjacentPanorama",
   "yaw": -14.39,
   "distance": 1,
   "backwardYaw": -56.85
  },
  {
   "panorama": "this.panorama_10F46F93_232C_2580_41AC_7731FE656D63",
   "class": "AdjacentPanorama",
   "yaw": -89,
   "distance": 1,
   "backwardYaw": 157.19
  },
  {
   "panorama": "this.panorama_10E0012F_232C_5A81_41C8_2D2AD8D8E8C7",
   "class": "AdjacentPanorama",
   "yaw": 156.69,
   "distance": 1,
   "backwardYaw": -10.37
  }
 ],
 "hfovMax": 146,
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_1C0C66CB_22D4_2780_41C3_D4F4C4ABDE0C",
  "this.overlay_1ABD4E6E_22D4_6680_41C4_62E98A81A8BE",
  "this.overlay_1AFD94EE_22D4_5B80_41BB_02D3E728F6A2"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 173.4,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_02868181_2D3C_5D80_41C7_9C70A495BA40",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_198C60E8_07DC_A1CA_41AC_D33D2FD1B457_t.jpg",
 "partial": false,
 "label": "Half bath",
 "id": "panorama_198C60E8_07DC_A1CA_41AC_D33D2FD1B457",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_198C60E8_07DC_A1CA_41AC_D33D2FD1B457_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_198C60E8_07DC_A1CA_41AC_D33D2FD1B457_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_198C60E8_07DC_A1CA_41AC_D33D2FD1B457_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_198C60E8_07DC_A1CA_41AC_D33D2FD1B457_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_198C60E8_07DC_A1CA_41AC_D33D2FD1B457_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_198C60E8_07DC_A1CA_41AC_D33D2FD1B457_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_198C60E8_07DC_A1CA_41AC_D33D2FD1B457_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_198C60E8_07DC_A1CA_41AC_D33D2FD1B457_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_198C60E8_07DC_A1CA_41AC_D33D2FD1B457_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_198C60E8_07DC_A1CA_41AC_D33D2FD1B457_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_198C60E8_07DC_A1CA_41AC_D33D2FD1B457_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_198C60E8_07DC_A1CA_41AC_D33D2FD1B457_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_198C60E8_07DC_A1CA_41AC_D33D2FD1B457_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_198C60E8_07DC_A1CA_41AC_D33D2FD1B457_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_198C60E8_07DC_A1CA_41AC_D33D2FD1B457_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_198C60E8_07DC_A1CA_41AC_D33D2FD1B457_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_198C60E8_07DC_A1CA_41AC_D33D2FD1B457_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_198C60E8_07DC_A1CA_41AC_D33D2FD1B457_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_198C60E8_07DC_A1CA_41AC_D33D2FD1B457_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 146,
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_3016DF7E_1B44_E0C6_41A5_CB9F03096291"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_10F43664_232C_2680_41C4_3D6C271F7126_t.jpg",
 "partial": false,
 "label": "Living room",
 "id": "panorama_10F43664_232C_2680_41C4_3D6C271F7126",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10F43664_232C_2680_41C4_3D6C271F7126_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10F43664_232C_2680_41C4_3D6C271F7126_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10F43664_232C_2680_41C4_3D6C271F7126_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10F43664_232C_2680_41C4_3D6C271F7126_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10F43664_232C_2680_41C4_3D6C271F7126_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10F43664_232C_2680_41C4_3D6C271F7126_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10F43664_232C_2680_41C4_3D6C271F7126_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10F43664_232C_2680_41C4_3D6C271F7126_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10F43664_232C_2680_41C4_3D6C271F7126_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10F43664_232C_2680_41C4_3D6C271F7126_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10F43664_232C_2680_41C4_3D6C271F7126_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10F43664_232C_2680_41C4_3D6C271F7126_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_10F43664_232C_2680_41C4_3D6C271F7126_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10F43664_232C_2680_41C4_3D6C271F7126_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10F43664_232C_2680_41C4_3D6C271F7126_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10F43664_232C_2680_41C4_3D6C271F7126_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10F43664_232C_2680_41C4_3D6C271F7126_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10F43664_232C_2680_41C4_3D6C271F7126_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10F43664_232C_2680_41C4_3D6C271F7126_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B",
   "class": "AdjacentPanorama",
   "yaw": -136.23,
   "distance": 1,
   "backwardYaw": -156.58
  },
  {
   "panorama": "this.panorama_10E093C1_232C_5D80_41C1_531C0DCD465E",
   "class": "AdjacentPanorama",
   "yaw": -56.85,
   "distance": 1,
   "backwardYaw": -14.39
  }
 ],
 "hfovMax": 146,
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_1D18AE6D_22D4_E680_419D_F6073D33F781",
  "this.overlay_1AF45786_22D5_E580_41AD_23E7C53CC557"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 142
 },
 "id": "panorama_10E028FA_232C_2B83_41BB_08FA880BD4BE_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -84.86,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_02AB01A4_2D3C_5D80_41BD_E8E9E3E32E5C",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_14AC3ED3_055C_A1DE_41A5_F53A027E9489_t.jpg",
 "partial": false,
 "label": "Facade",
 "id": "panorama_14AC3ED3_055C_A1DE_41A5_F53A027E9489",
 "hfovMin": "100%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14AC3ED3_055C_A1DE_41A5_F53A027E9489_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_14AC3ED3_055C_A1DE_41A5_F53A027E9489_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_14AC3ED3_055C_A1DE_41A5_F53A027E9489_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14AC3ED3_055C_A1DE_41A5_F53A027E9489_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_14AC3ED3_055C_A1DE_41A5_F53A027E9489_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_14AC3ED3_055C_A1DE_41A5_F53A027E9489_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14AC3ED3_055C_A1DE_41A5_F53A027E9489_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_14AC3ED3_055C_A1DE_41A5_F53A027E9489_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_14AC3ED3_055C_A1DE_41A5_F53A027E9489_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14AC3ED3_055C_A1DE_41A5_F53A027E9489_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_14AC3ED3_055C_A1DE_41A5_F53A027E9489_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_14AC3ED3_055C_A1DE_41A5_F53A027E9489_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_14AC3ED3_055C_A1DE_41A5_F53A027E9489_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14AC3ED3_055C_A1DE_41A5_F53A027E9489_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_14AC3ED3_055C_A1DE_41A5_F53A027E9489_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_14AC3ED3_055C_A1DE_41A5_F53A027E9489_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14AC3ED3_055C_A1DE_41A5_F53A027E9489_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_14AC3ED3_055C_A1DE_41A5_F53A027E9489_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_14AC3ED3_055C_A1DE_41A5_F53A027E9489_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 146,
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_11F12803_054C_A03E_4192_EA7BCDAE24F9"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -23.31,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_0260C3B0_2D3C_5D80_41A8_D6D53065DC7C",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_19F0C09C_07DC_A04A_41AC_7F2BF7962EF7_t.jpg",
 "partial": false,
 "label": "Stairs",
 "id": "panorama_19F0C09C_07DC_A04A_41AC_7F2BF7962EF7",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F0C09C_07DC_A04A_41AC_7F2BF7962EF7_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F0C09C_07DC_A04A_41AC_7F2BF7962EF7_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F0C09C_07DC_A04A_41AC_7F2BF7962EF7_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F0C09C_07DC_A04A_41AC_7F2BF7962EF7_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F0C09C_07DC_A04A_41AC_7F2BF7962EF7_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F0C09C_07DC_A04A_41AC_7F2BF7962EF7_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F0C09C_07DC_A04A_41AC_7F2BF7962EF7_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F0C09C_07DC_A04A_41AC_7F2BF7962EF7_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F0C09C_07DC_A04A_41AC_7F2BF7962EF7_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F0C09C_07DC_A04A_41AC_7F2BF7962EF7_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F0C09C_07DC_A04A_41AC_7F2BF7962EF7_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F0C09C_07DC_A04A_41AC_7F2BF7962EF7_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_19F0C09C_07DC_A04A_41AC_7F2BF7962EF7_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F0C09C_07DC_A04A_41AC_7F2BF7962EF7_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F0C09C_07DC_A04A_41AC_7F2BF7962EF7_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F0C09C_07DC_A04A_41AC_7F2BF7962EF7_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F0C09C_07DC_A04A_41AC_7F2BF7962EF7_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F0C09C_07DC_A04A_41AC_7F2BF7962EF7_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F0C09C_07DC_A04A_41AC_7F2BF7962EF7_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C",
   "class": "AdjacentPanorama",
   "yaw": 160.84,
   "distance": 1,
   "backwardYaw": 134.58
  },
  {
   "panorama": "this.panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5",
   "class": "AdjacentPanorama",
   "yaw": -4.97,
   "distance": 1,
   "backwardYaw": 167.62
  }
 ],
 "hfovMax": 146,
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_31DA7473_1B45_A0DD_41A9_B7ACE1704DD4",
  "this.overlay_3190A282_1B7C_603F_4198_7A357B151502"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3_t.jpg",
 "partial": false,
 "label": "Walking closet",
 "id": "panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_198842E3_07DF_E1FD_41A9_B1A5FD362921",
   "class": "AdjacentPanorama",
   "yaw": -7.23,
   "distance": 1,
   "backwardYaw": 160.58
  },
  {
   "panorama": "this.panorama_19881EC8_07DF_A1CB_41A3_BC63A466A66E",
   "class": "AdjacentPanorama",
   "yaw": 83.08,
   "distance": 1,
   "backwardYaw": -86.62
  }
 ],
 "hfovMax": 146,
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_36226E6A_22D4_7C4C_41C0_536FC7F1C391",
  "this.overlay_377F85CA_22D4_2C4C_4179_1135399F2F06"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 93.38,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_03D52582_2D3C_2583_41C8_6B11AC9FC8B5",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 38.11,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_025BF34A_2D3C_5E80_41BE_56AE21EEC616",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -142.39,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_03F735BE_2D3C_2580_41CB_552AC9B6ED3E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 142
 },
 "id": "panorama_19F10857_07DC_E0C6_41A1_403B4A37CEAD_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_1988DB90_07DC_E05A_415A_E9B6E7B6A3D8_t.jpg",
 "label": "Patio",
 "id": "panorama_1988DB90_07DC_E05A_415A_E9B6E7B6A3D8",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1988DB90_07DC_E05A_415A_E9B6E7B6A3D8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1988DB90_07DC_E05A_415A_E9B6E7B6A3D8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1988DB90_07DC_E05A_415A_E9B6E7B6A3D8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1988DB90_07DC_E05A_415A_E9B6E7B6A3D8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1988DB90_07DC_E05A_415A_E9B6E7B6A3D8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1988DB90_07DC_E05A_415A_E9B6E7B6A3D8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1988DB90_07DC_E05A_415A_E9B6E7B6A3D8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1988DB90_07DC_E05A_415A_E9B6E7B6A3D8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1988DB90_07DC_E05A_415A_E9B6E7B6A3D8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1988DB90_07DC_E05A_415A_E9B6E7B6A3D8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1988DB90_07DC_E05A_415A_E9B6E7B6A3D8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1988DB90_07DC_E05A_415A_E9B6E7B6A3D8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1988DB90_07DC_E05A_415A_E9B6E7B6A3D8_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1988DB90_07DC_E05A_415A_E9B6E7B6A3D8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1988DB90_07DC_E05A_415A_E9B6E7B6A3D8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1988DB90_07DC_E05A_415A_E9B6E7B6A3D8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1988DB90_07DC_E05A_415A_E9B6E7B6A3D8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1988DB90_07DC_E05A_415A_E9B6E7B6A3D8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1988DB90_07DC_E05A_415A_E9B6E7B6A3D8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfovMax": 146,
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.overlay_33BB6F20_1B4D_E07B_41AD_A21FAA1E30CC"
 ],
 "hfov": 360,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_10E028FA_232C_2B83_41BB_08FA880BD4BE_t.jpg",
 "partial": false,
 "label": "Kitchen",
 "id": "panorama_10E028FA_232C_2B83_41BB_08FA880BD4BE",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10E028FA_232C_2B83_41BB_08FA880BD4BE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10E028FA_232C_2B83_41BB_08FA880BD4BE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10E028FA_232C_2B83_41BB_08FA880BD4BE_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10E028FA_232C_2B83_41BB_08FA880BD4BE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10E028FA_232C_2B83_41BB_08FA880BD4BE_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10E028FA_232C_2B83_41BB_08FA880BD4BE_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10E028FA_232C_2B83_41BB_08FA880BD4BE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10E028FA_232C_2B83_41BB_08FA880BD4BE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10E028FA_232C_2B83_41BB_08FA880BD4BE_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10E028FA_232C_2B83_41BB_08FA880BD4BE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10E028FA_232C_2B83_41BB_08FA880BD4BE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10E028FA_232C_2B83_41BB_08FA880BD4BE_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_10E028FA_232C_2B83_41BB_08FA880BD4BE_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10E028FA_232C_2B83_41BB_08FA880BD4BE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10E028FA_232C_2B83_41BB_08FA880BD4BE_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10E028FA_232C_2B83_41BB_08FA880BD4BE_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10E028FA_232C_2B83_41BB_08FA880BD4BE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10E028FA_232C_2B83_41BB_08FA880BD4BE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10E028FA_232C_2B83_41BB_08FA880BD4BE_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_10F59B96_232F_ED80_41C0_69FE70F15D69",
   "class": "AdjacentPanorama",
   "yaw": 176.03,
   "distance": 1,
   "backwardYaw": -6.6
  }
 ],
 "hfovMax": 146,
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_1DCA8995_22DC_2D80_41B8_EED3A2629EE3"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "minHeight": 20,
 "closeButtonBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "id": "window_0DF6DB02_2D2C_2E83_41B4_7670D3DF9885",
 "width": 200,
 "closeButtonBorderRadius": 11,
 "closeButtonPaddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "minWidth": 20,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonPaddingLeft": 0,
 "headerBackgroundOpacity": 1,
 "closeButtonRollOverBackgroundOpacity": 1,
 "bodyPaddingLeft": 5,
 "paddingBottom": 0,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "closeButtonPressedIconLineWidth": 1,
 "backgroundColorRatios": [],
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonIconWidth": 12,
 "paddingRight": 0,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "shadow": true,
 "closeButtonPressedBorderSize": 0,
 "height": 100,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "scrollBarVisible": "rollOver",
 "bodyBackgroundColorDirection": "vertical",
 "bodyPaddingTop": 5,
 "scrollBarColor": "#000000",
 "titleTextDecoration": "none",
 "closeButtonIconHeight": 12,
 "closeButtonPaddingTop": 0,
 "title": "",
 "gap": 5,
 "headerBackgroundColorDirection": "vertical",
 "bodyPaddingBottom": 5,
 "backgroundColor": [],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "shadowHorizontalLength": 3,
 "titleFontColor": "#000000",
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "shadowSpread": 1,
 "closeButtonBorderColor": "#000000",
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "paddingLeft": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "closeButtonRollOverBorderColor": "#000000",
 "backgroundOpacity": 1,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "shadowColor": "#000000",
 "shadowVerticalLength": 0,
 "layout": "vertical",
 "titleFontWeight": "normal",
 "children": [
  "this.htmlText_0DF42B06_2D2C_2E83_41A3_7884AB9996C0"
 ],
 "footerHeight": 5,
 "closeButtonIconLineWidth": 2,
 "class": "Window",
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerBackgroundOpacity": 1,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "closeButtonRollOverIconLineWidth": 1,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "closeButtonRollOverBorderSize": 0,
 "horizontalAlign": "center",
 "footerBorderColor": "#000000",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "footerBorderSize": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "closeButtonPaddingRight": 0,
 "bodyPaddingRight": 5,
 "closeButtonPressedBackgroundOpacity": 1,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window75616"
 },
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "contentOpaque": false,
 "closeButtonBorderSize": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 142
 },
 "id": "panorama_19884912_07DF_A05E_4183_FBFCC0C02AF6_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C_t.jpg",
 "partial": false,
 "label": "Entrance",
 "id": "panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_19F522E4_07DC_61FB_41A3_970281A6101B",
   "class": "AdjacentPanorama",
   "yaw": 174.22,
   "distance": 1,
   "backwardYaw": 169.07
  },
  {
   "panorama": "this.panorama_19F0C09C_07DC_A04A_41AC_7F2BF7962EF7",
   "class": "AdjacentPanorama",
   "yaw": 134.58,
   "distance": 1,
   "backwardYaw": 160.84
  },
  {
   "panorama": "this.panorama_198C60E8_07DC_A1CA_41AC_D33D2FD1B457",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 146,
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_31570FDF_1B45_9FC6_4190_DDD4F0D42B95",
  "this.overlay_31D33A7A_1B44_60CE_419B_D739EF30E268",
  "this.overlay_3058428D_22FC_24C7_41AF_AAA793B103A6"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 165.31,
  "pitch": -5.51,
  "hfov": 142
 },
 "id": "camera_0257337A_2D3C_5E80_41A6_6E9E9973B56C",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 142.23,
  "pitch": -4.92,
  "hfov": 142
 },
 "id": "panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 142
 },
 "id": "panorama_19F522E4_07DC_61FB_41A3_970281A6101B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 142
 },
 "id": "panorama_10E0012F_232C_5A81_41C8_2D2AD8D8E8C7_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -27.33,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_0390E488_2D3C_5B80_41C2_45F87AA59C6A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B_t.jpg",
 "partial": false,
 "label": "Entrance",
 "id": "panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_10F59B96_232F_ED80_41C0_69FE70F15D69",
   "class": "AdjacentPanorama",
   "yaw": 95.14,
   "distance": 1,
   "backwardYaw": 152.67
  },
  {
   "panorama": "this.panorama_10F43664_232C_2680_41C4_3D6C271F7126",
   "class": "AdjacentPanorama",
   "yaw": -156.58,
   "distance": 1,
   "backwardYaw": -136.23
  }
 ],
 "hfovMax": 146,
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_1F36DC6B_22DC_2A80_41B2_19E0794AA963",
  "this.overlay_1E34B2FC_22DF_DF87_4184_79CF7BEAA666"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 177.79,
  "pitch": 0,
  "hfov": 142
 },
 "id": "camera_0224F2B1_2D3C_5F81_41AD_38922B4386C4",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_19F33EFF_07DF_A1C5_4187_DFFFB19DAA9C_t.jpg",
 "partial": false,
 "label": "Bedroom 1",
 "id": "panorama_19F33EFF_07DF_A1C5_4187_DFFFB19DAA9C",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F33EFF_07DF_A1C5_4187_DFFFB19DAA9C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F33EFF_07DF_A1C5_4187_DFFFB19DAA9C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F33EFF_07DF_A1C5_4187_DFFFB19DAA9C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F33EFF_07DF_A1C5_4187_DFFFB19DAA9C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F33EFF_07DF_A1C5_4187_DFFFB19DAA9C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F33EFF_07DF_A1C5_4187_DFFFB19DAA9C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F33EFF_07DF_A1C5_4187_DFFFB19DAA9C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F33EFF_07DF_A1C5_4187_DFFFB19DAA9C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F33EFF_07DF_A1C5_4187_DFFFB19DAA9C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F33EFF_07DF_A1C5_4187_DFFFB19DAA9C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F33EFF_07DF_A1C5_4187_DFFFB19DAA9C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F33EFF_07DF_A1C5_4187_DFFFB19DAA9C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_19F33EFF_07DF_A1C5_4187_DFFFB19DAA9C_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F33EFF_07DF_A1C5_4187_DFFFB19DAA9C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F33EFF_07DF_A1C5_4187_DFFFB19DAA9C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F33EFF_07DF_A1C5_4187_DFFFB19DAA9C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F33EFF_07DF_A1C5_4187_DFFFB19DAA9C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_19F33EFF_07DF_A1C5_4187_DFFFB19DAA9C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_19F33EFF_07DF_A1C5_4187_DFFFB19DAA9C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_198842E3_07DF_E1FD_41A9_B1A5FD362921",
   "class": "AdjacentPanorama",
   "yaw": -131.14,
   "distance": 1,
   "backwardYaw": 13.12
  },
  {
   "panorama": "this.panorama_19F522E4_07DC_61FB_41A3_970281A6101B",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 146,
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_36BD1D22_22DC_FDFC_41AA_87CA19BD7427",
  "this.overlay_36206993_22DC_24DC_41BC_4FC8639E4A81"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_14AC3ED3_055C_A1DE_41A5_F53A027E9489",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 0, 1)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_14AC3ED3_055C_A1DE_41A5_F53A027E9489_camera"
  },
  {
   "media": "this.panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 1, 2)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C_camera"
  },
  {
   "media": "this.panorama_198C60E8_07DC_A1CA_41AC_D33D2FD1B457",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 2, 3)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_198C60E8_07DC_A1CA_41AC_D33D2FD1B457_camera"
  },
  {
   "media": "this.panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 3, 4)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5_camera"
  },
  {
   "media": "this.panorama_1988DB90_07DC_E05A_415A_E9B6E7B6A3D8",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 4, 5)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1988DB90_07DC_E05A_415A_E9B6E7B6A3D8_camera"
  },
  {
   "media": "this.panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 5, 6)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A_camera"
  },
  {
   "media": "this.panorama_1988B03D_07DC_604A_41A0_B22C45008018",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 6, 7)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1988B03D_07DC_604A_41A0_B22C45008018_camera"
  },
  {
   "media": "this.panorama_19F33EFF_07DF_A1C5_4187_DFFFB19DAA9C",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 7, 8)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_19F33EFF_07DF_A1C5_4187_DFFFB19DAA9C_camera"
  },
  {
   "media": "this.panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 8, 9)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3_camera"
  },
  {
   "media": "this.panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 9, 10)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E_camera"
  },
  {
   "media": "this.panorama_198BBA63_07DC_E0FE_419D_725ED087C58E",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 10, 0)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_198BBA63_07DC_E0FE_419D_725ED087C58E_camera"
  }
 ],
 "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist"
},
{
 "thumbnailUrl": "media/panorama_10E0012F_232C_5A81_41C8_2D2AD8D8E8C7_t.jpg",
 "partial": false,
 "label": "Bathroom",
 "id": "panorama_10E0012F_232C_5A81_41C8_2D2AD8D8E8C7",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10E0012F_232C_5A81_41C8_2D2AD8D8E8C7_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10E0012F_232C_5A81_41C8_2D2AD8D8E8C7_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10E0012F_232C_5A81_41C8_2D2AD8D8E8C7_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10E0012F_232C_5A81_41C8_2D2AD8D8E8C7_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10E0012F_232C_5A81_41C8_2D2AD8D8E8C7_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10E0012F_232C_5A81_41C8_2D2AD8D8E8C7_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10E0012F_232C_5A81_41C8_2D2AD8D8E8C7_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10E0012F_232C_5A81_41C8_2D2AD8D8E8C7_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10E0012F_232C_5A81_41C8_2D2AD8D8E8C7_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10E0012F_232C_5A81_41C8_2D2AD8D8E8C7_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10E0012F_232C_5A81_41C8_2D2AD8D8E8C7_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10E0012F_232C_5A81_41C8_2D2AD8D8E8C7_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_10E0012F_232C_5A81_41C8_2D2AD8D8E8C7_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10E0012F_232C_5A81_41C8_2D2AD8D8E8C7_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10E0012F_232C_5A81_41C8_2D2AD8D8E8C7_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10E0012F_232C_5A81_41C8_2D2AD8D8E8C7_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10E0012F_232C_5A81_41C8_2D2AD8D8E8C7_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_10E0012F_232C_5A81_41C8_2D2AD8D8E8C7_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_10E0012F_232C_5A81_41C8_2D2AD8D8E8C7_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_10E093C1_232C_5D80_41C1_531C0DCD465E",
   "class": "AdjacentPanorama",
   "yaw": -10.37,
   "distance": 1,
   "backwardYaw": 156.69
  }
 ],
 "hfovMax": 146,
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_07B8BAAC_22D4_2F87_41B4_68651731EAF3"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_1988B03D_07DC_604A_41A0_B22C45008018_t.jpg",
 "partial": false,
 "label": "Laundry space",
 "id": "panorama_1988B03D_07DC_604A_41A0_B22C45008018",
 "hfovMin": "135%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1988B03D_07DC_604A_41A0_B22C45008018_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1988B03D_07DC_604A_41A0_B22C45008018_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1988B03D_07DC_604A_41A0_B22C45008018_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1988B03D_07DC_604A_41A0_B22C45008018_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1988B03D_07DC_604A_41A0_B22C45008018_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1988B03D_07DC_604A_41A0_B22C45008018_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1988B03D_07DC_604A_41A0_B22C45008018_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1988B03D_07DC_604A_41A0_B22C45008018_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1988B03D_07DC_604A_41A0_B22C45008018_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1988B03D_07DC_604A_41A0_B22C45008018_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1988B03D_07DC_604A_41A0_B22C45008018_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1988B03D_07DC_604A_41A0_B22C45008018_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1988B03D_07DC_604A_41A0_B22C45008018_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1988B03D_07DC_604A_41A0_B22C45008018_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1988B03D_07DC_604A_41A0_B22C45008018_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1988B03D_07DC_604A_41A0_B22C45008018_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1988B03D_07DC_604A_41A0_B22C45008018_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1988B03D_07DC_604A_41A0_B22C45008018_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1988B03D_07DC_604A_41A0_B22C45008018_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A",
   "class": "AdjacentPanorama",
   "yaw": -169.53,
   "distance": 1,
   "backwardYaw": -5.98
  }
 ],
 "hfovMax": 146,
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_30A7012A_22EC_65CC_41BE_5C3A8A261804",
  "this.overlay_3060F006_22FC_23C5_41B4_922A4437B042",
  "this.overlay_0E076B4B_2D2C_2E81_41B2_09B9219495AF"
 ],
 "pitch": 0,
 "hfov": 360
},
{
 "toolTipPaddingTop": 7,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingRight": 10,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "minWidth": 100,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "toolTipPaddingLeft": 10,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "paddingRight": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "borderSize": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipBorderColor": "#767676",
 "shadow": false,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 0.5,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "paddingTop": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "paddingLeft": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "transitionMode": "blending",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "minHeight": 50,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "paddingLeft": 0,
 "id": "Container_0C5F33A8_3BA0_A6FF_41C3_2A6652E2CE94",
 "left": 30,
 "width": 271,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "children": [
  "this.Label_0C5F23A8_3BA0_A6FF_419F_468451E37918",
  "this.Label_1719FF3B_07C4_A04E_415D_E798F71BE96A"
 ],
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": 20,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "height": 97,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "data": {
  "name": "--STICKER"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "layout": "absolute"
},
{
 "paddingLeft": 0,
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1",
  "this.Image_14DAC1AA_07C4_A04E_4198_CF82BCC9ED35"
 ],
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minWidth": 1,
 "class": "Container",
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingBottom": 0,
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "top": 0,
 "paddingRight": 0,
 "right": "0%",
 "height": 60,
 "borderSize": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "minHeight": 1,
 "data": {
  "name": "--BUTTON SET"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0
},
{
 "paddingLeft": 0,
 "id": "Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
 "backgroundOpacity": 1,
 "width": 60,
 "scrollBarWidth": 10,
 "children": [
  "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
  "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
  "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
  "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
  "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A"
 ],
 "borderRadius": 0,
 "minWidth": 1,
 "class": "Container",
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0.02
 ],
 "top": 62,
 "paddingRight": 0,
 "right": 15,
 "height": 300,
 "borderSize": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#F7931E"
 ],
 "contentOpaque": false,
 "minHeight": 1,
 "data": {
  "name": "-button set"
 },
 "paddingTop": 0,
 "visible": false,
 "layout": "vertical",
 "scrollBarOpacity": 0.5
},
{
 "paddingLeft": 0,
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_1160679F_2334_2580_41CA_F9E099E1232D",
  "this.IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0"
 ],
 "scrollBarWidth": 10,
 "width": "82.931%",
 "borderRadius": 0,
 "minWidth": 1,
 "class": "Container",
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "propagateClick": true,
 "paddingRight": 30,
 "bottom": "0%",
 "borderSize": 0,
 "shadow": false,
 "height": 90,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "horizontalAlign": "right",
 "gap": 3,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "data": {
  "name": "-button set container"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "layout": "horizontal"
},
{
 "paddingLeft": 0,
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.6,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "paddingRight": 0,
 "bottom": "0%",
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minHeight": 1,
 "data": {
  "name": "---INFO photo"
 },
 "paddingTop": 0,
 "visible": false,
 "layout": "absolute"
},
{
 "paddingLeft": 0,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.6,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "paddingRight": 0,
 "bottom": "0%",
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minHeight": 1,
 "data": {
  "name": "---PANORAMA LIST"
 },
 "paddingTop": 0,
 "visible": false,
 "layout": "absolute"
},
{
 "paddingLeft": 0,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.6,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "paddingRight": 0,
 "bottom": "0%",
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minHeight": 1,
 "data": {
  "name": "---FLOORPLAN"
 },
 "paddingTop": 0,
 "visible": false,
 "layout": "absolute"
},
{
 "paddingLeft": 0,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.6,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "paddingRight": 0,
 "bottom": "0%",
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minHeight": 1,
 "data": {
  "name": "---PHOTOALBUM"
 },
 "paddingTop": 0,
 "visible": false,
 "layout": "absolute"
},
{
 "paddingLeft": 0,
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.6,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "paddingRight": 0,
 "bottom": "0%",
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minHeight": 1,
 "data": {
  "name": "---REALTOR"
 },
 "paddingTop": 0,
 "visible": false,
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "data": {
  "name": "text 1"
 },
 "paddingLeft": 0,
 "id": "Label_0C5F13A8_3BA0_A6FF_41BD_E3D21CFCE151",
 "left": 32,
 "width": 202,
 "textShadowHorizontalLength": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "textShadowBlurRadius": 10,
 "class": "Label",
 "verticalAlign": "top",
 "text": "Townhomes",
 "propagateClick": false,
 "minWidth": 1,
 "paddingRight": 0,
 "bottom": 16,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "height": 41,
 "fontSize": "30px",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "textShadowOpacity": 1,
 "textShadowVerticalLength": 0,
 "textShadowColor": "#000000",
 "paddingTop": 0,
 "minHeight": 1,
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Arial",
 "pressedIconWidth": 30,
 "paddingLeft": 0,
 "id": "Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "backgroundOpacity": 1,
 "width": 60,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "Button",
 "iconHeight": 30,
 "verticalAlign": "middle",
 "iconWidth": 30,
 "propagateClick": false,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "borderSize": 0,
 "shadow": false,
 "fontSize": 12,
 "iconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41.png",
 "mode": "toggle",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41_pressed.png",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "rollOverBackgroundOpacity": 1,
 "backgroundColor": [
  "#F7931E"
 ],
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "minHeight": 1,
 "data": {
  "name": "Button Settings Mute"
 },
 "fontStyle": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Arial",
 "pressedIconWidth": 30,
 "paddingLeft": 0,
 "id": "Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "backgroundOpacity": 1,
 "width": 60,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "Button",
 "iconHeight": 30,
 "verticalAlign": "middle",
 "iconWidth": 30,
 "propagateClick": false,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "borderSize": 0,
 "shadow": false,
 "fontSize": 12,
 "iconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A.png",
 "mode": "toggle",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A_pressed.png",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "rollOverBackgroundOpacity": 1,
 "backgroundColor": [
  "#F7931E"
 ],
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "minHeight": 1,
 "data": {
  "name": "Button Settings Fullscreen"
 },
 "fontStyle": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_198BEBAE_07DC_A047_419A_778EFBAF096B, this.camera_03E4D5AE_2D3C_2583_41C2_36FB50018CF9); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3EB49E47_233D_FC42_41B5_7505A8F59EFB",
   "pitch": -39.63,
   "yaw": -1.83,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.11,
   "distance": 100
  }
 ],
 "id": "overlay_348C3BEC_2337_E444_41AA_EE2A68E73595",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F18C1C_07DC_A04A_4183_84CC8818C930_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -39.63,
   "hfov": 17.11
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_198BBA63_07DC_E0FE_419D_725ED087C58E, this.camera_03F735BE_2D3C_2580_41CB_552AC9B6ED3E); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0329D487_2337_ECC3_41BF_375DB503215C",
   "pitch": -32.6,
   "yaw": -141.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.04,
   "distance": 100
  }
 ],
 "id": "overlay_3B725C5C_2334_1C44_41B8_B8F1E7D31B4E",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -141.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F18C1C_07DC_A04A_4183_84CC8818C930_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -32.6,
   "hfov": 21.04
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B, this.camera_02AB01A4_2D3C_5D80_41BD_E8E9E3E32E5C); this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0060275C_22EC_2680_41A6_768E36C22272",
   "pitch": -59.35,
   "yaw": 152.67,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.12,
   "distance": 100
  }
 ],
 "id": "overlay_1E55D175_22DC_FA80_41CA_6E71B7D92F5E",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 152.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10F59B96_232F_ED80_41C0_69FE70F15D69_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -59.35,
   "hfov": 13.12
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_10E028FA_232C_2B83_41BB_08FA880BD4BE, this.camera_029CD192_2D3C_5D80_41A6_7D4735F6F5EB); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0061D75C_22EC_2680_41B3_1D874AFDB093",
   "pitch": -47.04,
   "yaw": -6.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.54,
   "distance": 100
  }
 ],
 "id": "overlay_1DA29D1D_22DC_EA80_41B3_01D9092DA024",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10F59B96_232F_ED80_41C0_69FE70F15D69_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -47.04,
   "hfov": 17.54
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3, this.camera_0233D2E5_2D3C_5F80_41C4_2F77484E90E4); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3EB21E42_233D_FFBD_41A6_0AA3E8FA6FF0",
   "pitch": -45.66,
   "yaw": -86.62,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.4,
   "distance": 100
  }
 ],
 "id": "overlay_37208BDD_22D4_2444_415A_6DD369575705",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -86.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19881EC8_07DF_A1CB_41A3_BC63A466A66E_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -45.66,
   "hfov": 16.4
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E, this.camera_0224F2B1_2D3C_5F81_41AD_38922B4386C4); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3EB28E43_233D_FC43_41B3_AF72A642E134",
   "pitch": -35.99,
   "yaw": -163.49,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.59,
   "distance": 100
  }
 ],
 "id": "overlay_3757340D_22D4_23C4_41A1_2B8C6A5A6DB3",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -163.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19881EC8_07DF_A1CB_41A3_BC63A466A66E_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -35.99,
   "hfov": 18.59
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_10E1BD44_232C_2A80_41A1_41528897E575, this.camera_0388E413_2D3C_5A81_41C4_7B8CC678B4FF); this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_00649769_22EC_2680_41C7_AA19CE1262CF",
   "pitch": -36.24,
   "yaw": -34.24,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.75,
   "distance": 100
  }
 ],
 "id": "overlay_183B8625_22D4_6680_41B6_D01FBEBB4794",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -34.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10F46F93_232C_2580_41AC_7731FE656D63_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -36.24,
   "hfov": 20.75
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_10E093C1_232C_5D80_41C1_531C0DCD465E, this.camera_0387A445_2D3C_5A80_41C7_6DBC0A335852); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_00640769_22EC_2680_41A5_F5E15D94F5FA",
   "pitch": -52.07,
   "yaw": 157.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.82,
   "distance": 100
  }
 ],
 "id": "overlay_18695D69_22EB_EA80_419A_7C4BBC3590F1",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 157.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10F46F93_232C_2580_41AC_7731FE656D63_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -52.07,
   "hfov": 15.82
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_37E1C378_22EC_244C_41B5_8D68357AE207",
   "pitch": -45.53,
   "yaw": -174.29,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.55,
   "distance": 100
  }
 ],
 "id": "overlay_36D16213_22F4_27DC_41B6_09334451C28F",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -174.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19884912_07DF_A05E_4183_FBFCC0C02AF6_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -45.53,
   "hfov": 18.55
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_37E1B378_22EC_244C_41BB_C98802FADB1B",
   "pitch": -29.46,
   "yaw": -43.66,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.87,
   "distance": 100
  }
 ],
 "id": "overlay_312B0DFF_22F4_7C44_4190_084D5942999A",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -43.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19884912_07DF_A05E_4183_FBFCC0C02AF6_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -29.46,
   "hfov": 20.87
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_19F33EFF_07DF_A1C5_4187_DFFFB19DAA9C, this.camera_0157A12B_2D3C_5A81_41B5_2741A816E4F6); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3EB0AE3F_233D_FFC3_41A1_3226F33E6EFD",
   "pitch": -40.51,
   "yaw": 13.12,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.99,
   "distance": 100
  }
 ],
 "id": "overlay_360C350A_22DC_2DCC_41BE_853F12B499D6",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_198842E3_07DF_E1FD_41A9_B1A5FD362921_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -40.51,
   "hfov": 18.99
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3, this.camera_016FC13D_2D3C_5A81_41C8_3B4DDAA13CB9); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_032A8481_2337_ECBF_41BE_420F5D1D49A4",
   "pitch": -59.1,
   "yaw": 160.58,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.83,
   "distance": 100
  }
 ],
 "id": "overlay_37BD7BC5_22DC_2447_419E_025D4281ED52",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 160.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_198842E3_07DF_E1FD_41A9_B1A5FD362921_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -59.1,
   "hfov": 12.83
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_10F46F93_232C_2580_41AC_7731FE656D63, this.camera_037FB650_2D3C_2680_41C2_949B7F63D670); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0065876A_22EC_2680_41B2_AF4FEA66D59C",
   "pitch": -29.46,
   "yaw": 138.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.41,
   "distance": 100
  }
 ],
 "id": "overlay_1833A4D5_22EC_5B80_41B5_C633EA9E9951",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 138.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10E1BD44_232C_2A80_41A1_41528897E575_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -29.46,
   "hfov": 22.41
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E, this.camera_035DB62D_2D3C_2680_41C6_72B1B8CF2DBF); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3EB57E44_233D_FC46_41C0_B7888100AC9B",
   "pitch": -44.65,
   "yaw": -97.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.69,
   "distance": 100
  }
 ],
 "id": "overlay_35A3411D_232C_65C7_41B1_2371EF015A75",
 "data": {
  "label": "Arrow 06b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -97.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_198BEBAE_07DC_A047_419A_778EFBAF096B_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -44.65,
   "hfov": 17.69
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_19F18C1C_07DC_A04A_4183_84CC8818C930, this.camera_036C163E_2D3C_2680_41C2_AE9B9850E11B); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3EB5FE45_233D_FC47_41BC_BD72B59519BB",
   "pitch": -35.11,
   "yaw": 175.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.35,
   "distance": 100
  }
 ],
 "id": "overlay_343D9BD1_232C_245C_41B3_E00E1735FBC1",
 "data": {
  "label": "Arrow 06b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 175.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_198BEBAE_07DC_A047_419A_778EFBAF096B_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -35.11,
   "hfov": 20.35
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_19F522E4_07DC_61FB_41A3_970281A6101B, this.camera_0343F613_2D3C_2680_41BD_E6D903707458); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3EB46E46_233D_FC45_41BD_FF4C729FF6C6",
   "pitch": -33.35,
   "yaw": -1.26,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.78,
   "distance": 100
  }
 ],
 "id": "overlay_3494DCD3_232C_3C5C_41B7_9D939A40EE83",
 "data": {
  "label": "Arrow 06b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_198BEBAE_07DC_A047_419A_778EFBAF096B_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -33.35,
   "hfov": 20.78
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_198BBA63_07DC_E0FE_419D_725ED087C58E, this.camera_0165C14D_2D3C_5A80_4193_4898DB129DFA); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3EB66E51_233D_FC5F_41A2_8E9DC5928DE3",
   "pitch": -34.98,
   "yaw": -3.52,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.91,
   "distance": 100
  }
 ],
 "id": "overlay_3BA70933_233B_E5DC_41B4_4F4A60516001",
 "data": {
  "label": "Arrow 06b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F10857_07DC_E0C6_41A1_403B4A37CEAD_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -34.98,
   "hfov": 17.91
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_19F18C1C_07DC_A04A_4183_84CC8818C930, this.camera_025BF34A_2D3C_5E80_41BE_56AE21EEC616); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3EB78E4F_233D_FC43_41B1_5F4372149D69",
   "pitch": -30.21,
   "yaw": 37.61,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.59,
   "distance": 100
  }
 ],
 "id": "overlay_34FAB071_2334_245F_4190_67A1384BD4AA",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 37.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_198BBA63_07DC_E0FE_419D_725ED087C58E_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -30.21,
   "hfov": 16.59
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_19F10857_07DC_E0C6_41A1_403B4A37CEAD, this.camera_024F1318_2D3C_5E80_4164_7BEFEE9B0578); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3EB7EE50_233D_FC5D_41BF_5776A8CA5CEB",
   "pitch": -29.46,
   "yaw": 85.85,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.72,
   "distance": 100
  }
 ],
 "id": "overlay_3BAF9242_2334_E7BD_41B1_EC76A20FD616",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_198BBA63_07DC_E0FE_419D_725ED087C58E_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -29.46,
   "hfov": 16.72
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_198BEBAE_07DC_A047_419A_778EFBAF096B, this.camera_021C6257_2D3C_5E81_41BA_F012BAF89A14); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3EB2CE43_233D_FC43_4197_CC01A99046D6",
   "pitch": -42.77,
   "yaw": 76.93,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.23,
   "distance": 100
  }
 ],
 "id": "overlay_3505CC87_232C_1CC4_4175_E1149242402F",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 76.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -42.77,
   "hfov": 17.23
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_19881EC8_07DF_A1CB_41A3_BC63A466A66E, this.camera_022B6268_2D3C_5E8F_4187_78634554C2B3); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3EB53E44_233D_FC45_41C1_4F306739500B",
   "pitch": -43.52,
   "yaw": -2.21,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.02,
   "distance": 100
  }
 ],
 "id": "overlay_355E9655_232C_2C47_41C0_A2F014D55E54",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -43.52,
   "hfov": 17.02
  }
 ],
 "rollOverDisplay": false
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Arial",
 "pressedIconWidth": 30,
 "paddingLeft": 0,
 "id": "Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "backgroundOpacity": 1,
 "width": 60,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "Button",
 "iconHeight": 30,
 "verticalAlign": "middle",
 "iconWidth": 30,
 "propagateClick": false,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "paddingRight": 0,
 "rollOverIconWidth": 30,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "borderSize": 0,
 "shadow": false,
 "fontSize": 12,
 "iconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA.png",
 "mode": "toggle",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA_pressed.png",
 "backgroundColorDirection": "vertical",
 "rollOverIconHeight": 30,
 "gap": 5,
 "rollOverBackgroundOpacity": 1,
 "backgroundColor": [
  "#F7931E"
 ],
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "minHeight": 1,
 "data": {
  "name": "Button Settings HS"
 },
 "fontStyle": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Arial",
 "pressedIconWidth": 30,
 "paddingLeft": 0,
 "id": "Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "backgroundOpacity": 1,
 "width": 60,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "Button",
 "iconHeight": 30,
 "verticalAlign": "middle",
 "iconWidth": 30,
 "propagateClick": false,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "paddingRight": 0,
 "rollOverIconWidth": 30,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "borderSize": 0,
 "shadow": false,
 "fontSize": 12,
 "iconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467.png",
 "mode": "toggle",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467_pressed.png",
 "backgroundColorDirection": "vertical",
 "rollOverIconHeight": 30,
 "gap": 5,
 "rollOverBackgroundOpacity": 1,
 "backgroundColor": [
  "#F7931E"
 ],
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "minHeight": 1,
 "data": {
  "name": "Button Settings Gyro"
 },
 "fontStyle": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Arial",
 "paddingLeft": 0,
 "id": "Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "backgroundOpacity": 1,
 "width": 60,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "Button",
 "iconHeight": 30,
 "verticalAlign": "middle",
 "iconWidth": 30,
 "propagateClick": false,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "borderSize": 0,
 "shadow": false,
 "fontSize": 12,
 "iconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0.png",
 "mode": "push",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0_pressed.png",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "rollOverBackgroundOpacity": 1,
 "backgroundColor": [
  "#F7931E"
 ],
 "fontColor": "#FFFFFF",
 "minHeight": 1,
 "data": {
  "name": "Button settings VR"
 },
 "fontStyle": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "paddingLeft": 0,
 "id": "IconButton_1160679F_2334_2580_41CA_F9E099E1232D",
 "backgroundOpacity": 0,
 "width": 42,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "transparencyActive": false,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "shadow": false,
 "height": 43,
 "maxWidth": 42,
 "iconURL": "skin/IconButton_1160679F_2334_2580_41CA_F9E099E1232D.png",
 "mode": "push",
 "horizontalAlign": "center",
 "maxHeight": 43,
 "data": {
  "name": "IconButton13821"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "cursor": "hand"
},
{
 "paddingLeft": 10,
 "id": "htmlText_0B339205_22EC_5E80_419B_EB19C1388369",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "minWidth": 0,
 "borderRadius": 0,
 "paddingBottom": 10,
 "class": "HTMLText",
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\"><B>WASHER CONNECTION</B></SPAN></SPAN></DIV></div>",
 "minHeight": 0,
 "data": {
  "name": "HTMLText75617"
 },
 "paddingTop": 10
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1988B03D_07DC_604A_41A0_B22C45008018, this.camera_014E60F5_2D3C_5B81_41BE_6C9BBAD3E939); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_36D5443E_22F4_23C5_41A0_48B6D29BC0CE",
   "pitch": -37.49,
   "yaw": -5.98,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.18,
   "distance": 100
  }
 ],
 "id": "overlay_2DB3372B_22DF_EDCC_41BF_C180F25E6E38",
 "data": {
  "label": "Arrow 04a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 22,
      "height": 16
     }
    ]
   },
   "pitch": -37.49,
   "hfov": 26.18
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5, this.camera_015ED11A_2D3C_5A83_41A5_1BDF0CB3CEC6); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_36D5043E_22F4_23C5_41A6_29921329ABDB",
   "pitch": -49.3,
   "yaw": -151.69,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.52,
   "distance": 50
  }
 ],
 "id": "overlay_3242738B_22DC_24C3_4192_3CFFF94EFC51",
 "data": {
  "label": "Arrow 04a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -151.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -49.3,
   "hfov": 21.52
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A, this.camera_02F8621C_2D3C_5E80_41C0_8DF0EC82BC71); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2C95ABFB_22D4_244C_41AC_80684E166FFC",
   "pitch": -21.54,
   "yaw": -160.73,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.09,
   "distance": 100
  }
 ],
 "id": "overlay_320FDFF5_1B7D_9FDA_41A5_29D554F804B9",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -160.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -21.54,
   "hfov": 18.09
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_19F7CD1D_07DC_E04A_419C_75371A6181CE, this.camera_02031247_2D3C_5E80_41BF_EAEF33E87297); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2C95EBFC_22D4_2444_41B6_3A57413C3BBF",
   "pitch": -30.21,
   "yaw": -8.24,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.24,
   "distance": 100
  }
 ],
 "id": "overlay_33A88F35_1B7C_E05A_41A7_42C01111BE2E",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -8.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -30.21,
   "hfov": 17.24
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_19F0C09C_07DC_A04A_41AC_7F2BF7962EF7, this.camera_02F76236_2D3C_5E80_41A4_6592B24BDF31); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2C921BFC_22D4_2444_4180_7F792693BC8E",
   "pitch": -23.18,
   "yaw": 167.62,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.34,
   "distance": 100
  }
 ],
 "id": "overlay_334F42DB_1B7C_E1CE_4192_59066DBDBDBE",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 167.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -23.18,
   "hfov": 18.34
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_37FE9374_22EC_2444_41BE_F2C616CF1519",
   "pitch": -44.03,
   "yaw": 3.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.32,
   "distance": 100
  }
 ],
 "id": "overlay_332A2A58_1B44_60CA_41A2_0DD8BAD218C4",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F7CD1D_07DC_E04A_419C_75371A6181CE_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -44.03,
   "hfov": 18.32
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5, this.camera_03C8F522_2D3C_5A80_41AA_01F9A60A07D7); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0014B928_2354_25CC_41B6_5A9AFA0F4162",
   "pitch": -30.71,
   "yaw": -164.95,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.09,
   "distance": 100
  }
 ],
 "id": "overlay_3D7CFBB3_232C_24DC_41BC_B2BB7713EB39",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -164.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F7CD1D_07DC_E04A_419C_75371A6181CE_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -30.71,
   "hfov": 20.09
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3EBEDE3B_233D_FFC3_4187_02244C703EFF",
   "pitch": -25.81,
   "yaw": -13.28,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.83,
   "distance": 100
  }
 ],
 "id": "overlay_3388CB0A_22D4_65CD_41B3_ECAD55567A76",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -13.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F522E4_07DC_61FB_41A3_970281A6101B_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -25.81,
   "hfov": 18.83
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_198BEBAE_07DC_A047_419A_778EFBAF096B, this.camera_028B816F_2D3C_5A80_41CC_3E72C0047E20); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_368867C4_22EB_EC44_41AA_239B21E851A7",
   "pitch": -49.05,
   "yaw": -81.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.39,
   "distance": 50
  }
 ],
 "id": "overlay_3040338C_22D4_24C5_41B1_671DE73681FB",
 "data": {
  "label": "Arrow 06a Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -81.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F522E4_07DC_61FB_41A3_970281A6101B_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 51,
      "height": 16
     }
    ]
   },
   "pitch": -49.05,
   "hfov": 22.39
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C, this.camera_017D915E_2D3C_5A80_41CB_9D8B859D72E7); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_032CD47E_2337_EC45_4196_4B2250FE65A5",
   "pitch": -53.38,
   "yaw": 169.07,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.24,
   "distance": 100
  }
 ],
 "id": "overlay_3FAD0799_2335_ECCF_41BA_4C28BE3FB955",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 169.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F522E4_07DC_61FB_41A3_970281A6101B_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -53.38,
   "hfov": 11.24
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_10F43664_232C_2680_41C4_3D6C271F7126, this.camera_02A6E1B5_2D3C_5D80_41C0_2A186DB13FAD); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_00660760_22EC_2685_41BB_DB27F4204A7A",
   "pitch": -41.77,
   "yaw": -14.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.19,
   "distance": 100
  }
 ],
 "id": "overlay_1C0C66CB_22D4_2780_41C3_D4F4C4ABDE0C",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -14.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10E093C1_232C_5D80_41C1_531C0DCD465E_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -41.77,
   "hfov": 19.19
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_10F46F93_232C_2580_41AC_7731FE656D63, this.camera_02BD31C6_2D3C_5D80_41CB_8ED7CC2033F9); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0067D766_22EC_2680_41C0_CAFA7E888968",
   "pitch": -41.51,
   "yaw": -89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.27,
   "distance": 100
  }
 ],
 "id": "overlay_1ABD4E6E_22D4_6680_41C4_62E98A81A8BE",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10E093C1_232C_5D80_41C1_531C0DCD465E_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -41.51,
   "hfov": 19.27
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_10E0012F_232C_5A81_41C8_2D2AD8D8E8C7, this.camera_02C8D1D7_2D3C_5D80_41C9_76B9720421D3); this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_00674767_22EC_2680_41C8_C58820868A61",
   "pitch": -50.56,
   "yaw": 156.69,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.35,
   "distance": 100
  }
 ],
 "id": "overlay_1AFD94EE_22D4_5B80_41BB_02D3E728F6A2",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 156.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10E093C1_232C_5D80_41C1_531C0DCD465E_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -50.56,
   "hfov": 16.35
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C, this.camera_02ECF20B_2D3C_5E80_41C3_8F1FBDC39585); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_37FDE371_22EC_245C_41B0_F625D319F33E",
   "pitch": -49.55,
   "yaw": 98.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.16,
   "distance": 100
  }
 ],
 "id": "overlay_3016DF7E_1B44_E0C6_41A5_CB9F03096291",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 98.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_198C60E8_07DC_A1CA_41AC_D33D2FD1B457_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -49.55,
   "hfov": 18.16
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_10E093C1_232C_5D80_41C1_531C0DCD465E, this.camera_03338602_2D3C_2680_41AC_06250F001BBD); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0066E75E_22EC_2680_41B7_0753579A2B0C",
   "pitch": -29.2,
   "yaw": -56.85,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.46,
   "distance": 100
  }
 ],
 "id": "overlay_1D18AE6D_22D4_E680_419D_F6073D33F781",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -56.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10F43664_232C_2680_41C4_3D6C271F7126_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -29.2,
   "hfov": 22.46
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B, this.camera_0321D5F1_2D3C_2580_41AA_54BBBD3D07CC); this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0066875F_22EC_2680_41B6_BA3F60DA4DF0",
   "pitch": -27.95,
   "yaw": -136.23,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.73,
   "distance": 100
  }
 ],
 "id": "overlay_1AF45786_22D5_E580_41AD_23E7C53CC557",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -136.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10F43664_232C_2680_41C4_3D6C271F7126_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -27.95,
   "hfov": 22.73
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C, this.camera_0257337A_2D3C_5E80_41A6_6E9E9973B56C); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2C97CBF5_22D4_2447_417B_EA55B53B541C",
   "pitch": -34.98,
   "yaw": -4.59,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.02,
   "distance": 100
  }
 ],
 "id": "overlay_11F12803_054C_A03E_4192_EA7BCDAE24F9",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14AC3ED3_055C_A1DE_41A5_F53A027E9489_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -34.98,
   "hfov": 19.02
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5, this.camera_02D1C1F9_2D3C_5D80_41C6_32D2A7962293); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2C953BFA_22D4_244D_419B_A96DAE27B62C",
   "pitch": -38.88,
   "yaw": -4.97,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.1,
   "distance": 100
  }
 ],
 "id": "overlay_31DA7473_1B45_A0DD_41A9_B7ACE1704DD4",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F0C09C_07DC_A04A_41AC_7F2BF7962EF7_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -38.88,
   "hfov": 17.1
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C, this.camera_02C451E9_2D3C_5D80_41A9_1D5E7C64F5B9); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2C956BFA_22D4_244D_41A3_4F567180FEBE",
   "pitch": -45.16,
   "yaw": 160.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.84,
   "distance": 100
  }
 ],
 "id": "overlay_3190A282_1B7C_603F_4198_7A357B151502",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 160.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F0C09C_07DC_A04A_41AC_7F2BF7962EF7_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -45.16,
   "hfov": 15.84
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_198842E3_07DF_E1FD_41A9_B1A5FD362921, this.camera_03DA8552_2D3C_5A83_41AA_5667C2B4F35F); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3EB36E40_233D_FFBD_41AB_42B982677C09",
   "pitch": -32.09,
   "yaw": -7.23,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.48,
   "distance": 100
  }
 ],
 "id": "overlay_36226E6A_22D4_7C4C_41C0_536FC7F1C391",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -32.09,
   "hfov": 16.48
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_19881EC8_07DF_A1CB_41A3_BC63A466A66E, this.camera_03D52582_2D3C_2583_41C8_6B11AC9FC8B5); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3EB3AE41_233D_FFBF_41C0_F4273D520B49",
   "pitch": -44.03,
   "yaw": 83.08,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.33,
   "distance": 100
  }
 ],
 "id": "overlay_377F85CA_22D4_2C4C_4179_1135399F2F06",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 83.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -44.03,
   "hfov": 16.33
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2C92EBFD_22D4_2444_419F_263E3ED7429F",
   "pitch": -33.6,
   "yaw": 169.45,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.18,
   "distance": 100
  }
 ],
 "id": "overlay_33BB6F20_1B4D_E07B_41AD_A21FAA1E30CC",
 "data": {
  "label": "Arrow 06b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 169.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1988DB90_07DC_E05A_415A_E9B6E7B6A3D8_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -33.6,
   "hfov": 22.18
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_10F59B96_232F_ED80_41C0_69FE70F15D69, this.camera_02868181_2D3C_5D80_41C7_9C70A495BA40); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0061475D_22EC_2680_41A0_9500DC9AD402",
   "pitch": -49.05,
   "yaw": 176.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.86,
   "distance": 100
  }
 ],
 "id": "overlay_1DCA8995_22DC_2D80_41B8_EED3A2629EE3",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 176.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10E028FA_232C_2B83_41BB_08FA880BD4BE_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -49.05,
   "hfov": 16.86
  }
 ],
 "rollOverDisplay": false
},
{
 "paddingLeft": 10,
 "id": "htmlText_0DF42B06_2D2C_2E83_41A3_7884AB9996C0",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "minWidth": 0,
 "borderRadius": 0,
 "paddingBottom": 10,
 "class": "HTMLText",
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\"><B>DRYER CONNECTION</B></SPAN></SPAN></DIV></div>",
 "minHeight": 0,
 "data": {
  "name": "HTMLText75617"
 },
 "paddingTop": 10
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_33BAC230_1B45_A05A_419F_03A3C56CB580",
   "pitch": -50.43,
   "yaw": 85.88,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.68,
   "distance": 50
  }
 ],
 "id": "overlay_31570FDF_1B45_9FC6_4190_DDD4F0D42B95",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -50.43,
   "hfov": 18.68
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_19F0C09C_07DC_A04A_41AC_7F2BF7962EF7, this.camera_031125E0_2D3C_2580_41C7_BBA39CA5DBA9); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_315AC2E1_22FC_647F_41B7_58901B2343F3",
   "pitch": -34.23,
   "yaw": 134.58,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.2,
   "distance": 100
  }
 ],
 "id": "overlay_31D33A7A_1B44_60CE_419B_D739EF30E268",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 134.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -34.23,
   "hfov": 19.2
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_19F522E4_07DC_61FB_41A3_970281A6101B, this.camera_0306C5CF_2D3C_2580_41A4_41E0E797BD18); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_37FC4371_22EC_245C_41B2_B193132B43E5",
   "pitch": -4.2,
   "yaw": 174.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.54,
   "distance": 100
  }
 ],
 "id": "overlay_3058428D_22FC_24C7_41AF_AAA793B103A6",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 174.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -4.2,
   "hfov": 18.54
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_10F59B96_232F_ED80_41C0_69FE70F15D69, this.camera_0390E488_2D3C_5B80_41C2_45F87AA59C6A); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0063175A_22EC_2680_41C6_FAE5DA56E594",
   "pitch": -43.27,
   "yaw": 95.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.74,
   "distance": 100
  }
 ],
 "id": "overlay_1F36DC6B_22DC_2A80_41B2_19E0794AA963",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 95.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -43.27,
   "hfov": 18.74
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_10F43664_232C_2680_41C4_3D6C271F7126, this.camera_03AFD4C0_2D3C_5B80_41A8_8AEC578FBA8D); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0060B75B_22EC_2680_41B6_498A9F9A6AC6",
   "pitch": -42.77,
   "yaw": -156.58,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.89,
   "distance": 100
  }
 ],
 "id": "overlay_1E34B2FC_22DF_DF87_4184_79CF7BEAA666",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -156.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -42.77,
   "hfov": 18.89
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_198842E3_07DF_E1FD_41A9_B1A5FD362921, this.camera_027FB3E0_2D3C_5DBF_41C5_60B0DF378CDB); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3EB1FE3D_233D_FFC7_414D_89EF33E45496",
   "pitch": -26.44,
   "yaw": -131.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.57,
   "distance": 100
  }
 ],
 "id": "overlay_36BD1D22_22DC_FDFC_41AA_87CA19BD7427",
 "data": {
  "label": "Arrow 06b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -131.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F33EFF_07DF_A1C5_4187_DFFFB19DAA9C_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -26.44,
   "hfov": 19.57
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3EB04E3E_233D_FFC5_41C1_252B7C7CE7AC",
   "pitch": -28.45,
   "yaw": 132.64,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.22,
   "distance": 100
  }
 ],
 "id": "overlay_36206993_22DC_24DC_41BC_4FC8639E4A81",
 "data": {
  "label": "Arrow 06b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 132.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19F33EFF_07DF_A1C5_4187_DFFFB19DAA9C_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -28.45,
   "hfov": 19.22
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_10E093C1_232C_5D80_41C1_531C0DCD465E, this.camera_0260C3B0_2D3C_5D80_41A8_D6D53065DC7C); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0064F768_22EC_2680_4190_B8ED2D211361",
   "pitch": -42.27,
   "yaw": -10.37,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.04,
   "distance": 100
  }
 ],
 "id": "overlay_07B8BAAC_22D4_2F87_41B4_68651731EAF3",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10E0012F_232C_5A81_41C8_2D2AD8D8E8C7_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -42.27,
   "hfov": 19.04
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A, this.camera_03B844F1_2D3C_5B80_41B5_54C993954661); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_36D5943F_22F4_23C3_4196_B1C0762CA64B",
   "pitch": -33.35,
   "yaw": -169.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.11,
   "distance": 100
  }
 ],
 "id": "overlay_30A7012A_22EC_65CC_41BE_5C3A8A261804",
 "data": {
  "label": "Arrow 04a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -169.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1988B03D_07DC_604A_41A0_B22C45008018_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -33.35,
   "hfov": 22.11
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "rollOver": "this.showWindow(this.window_0B4D5204_22EC_5E80_41C6_290A56DA3DB1, 2000, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30C77DA1_22FC_1CFC_417A_B9EF1B4B2BFC",
   "pitch": 10.24,
   "yaw": 92.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.18,
   "distance": 100
  }
 ],
 "id": "overlay_3060F006_22FC_23C5_41B4_922A4437B042",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 92.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1988B03D_07DC_604A_41A0_B22C45008018_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 10.24,
   "hfov": 17.18
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "rollOver": "this.showWindow(this.window_0DF6DB02_2D2C_2E83_41B4_7670D3DF9885, 2000, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_01B149BB_2D34_6D80_41C7_4DC164122F64",
   "pitch": -14.63,
   "yaw": 17.9,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.89,
   "distance": 100
  }
 ],
 "id": "overlay_0E076B4B_2D2C_2E81_41B2_09B9219495AF",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 17.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1988B03D_07DC_604A_41A0_B22C45008018_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -14.63,
   "hfov": 16.89
  }
 ],
 "rollOverDisplay": false
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "data": {
  "name": "text 2"
 },
 "paddingLeft": 0,
 "id": "Label_0C5F23A8_3BA0_A6FF_419F_468451E37918",
 "left": 0,
 "width": 236,
 "textShadowHorizontalLength": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "textShadowBlurRadius": 10,
 "class": "Label",
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "top": 66,
 "paddingRight": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "height": 32,
 "fontSize": 18,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "textShadowOpacity": 1,
 "textShadowVerticalLength": 0,
 "textShadowColor": "#000000",
 "paddingTop": 0,
 "minHeight": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "data": {
  "name": "text 1"
 },
 "paddingLeft": 0,
 "id": "Label_1719FF3B_07C4_A04E_415D_E798F71BE96A",
 "left": "0%",
 "width": 239,
 "textShadowHorizontalLength": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "textShadowBlurRadius": 10,
 "class": "Label",
 "verticalAlign": "top",
 "text": "East",
 "propagateClick": false,
 "minWidth": 1,
 "top": "5.15%",
 "paddingRight": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "height": 67,
 "fontSize": 54,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "textShadowOpacity": 1,
 "textShadowVerticalLength": 0,
 "textShadowColor": "#000000",
 "paddingTop": 0,
 "minHeight": 1,
 "fontWeight": "bold"
},
{
 "paddingLeft": 0,
 "id": "Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1",
 "backgroundOpacity": 0,
 "width": 1199,
 "scrollBarWidth": 10,
 "children": [
  "this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29",
  "this.DropDown_039BA88A_22FC_6B80_41C4_58820562B7EC"
 ],
 "borderRadius": 0,
 "class": "Container",
 "overflow": "scroll",
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": true,
 "top": "0%",
 "paddingRight": 15,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "height": 60,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "horizontalAlign": "right",
 "gap": 3,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "data": {
  "name": "-button set container"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "layout": "horizontal"
},
{
 "paddingLeft": 0,
 "id": "Image_14DAC1AA_07C4_A04E_4198_CF82BCC9ED35",
 "left": "1.57%",
 "width": "9.409%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "url": "skin/Image_14DAC1AA_07C4_A04E_4198_CF82BCC9ED35.png",
 "class": "Image",
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "propagateClick": false,
 "top": "18.33%",
 "paddingRight": 0,
 "borderSize": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "maxWidth": 156,
 "maxHeight": 35,
 "height": "58.333%",
 "data": {
  "name": "Image11807"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scaleMode": "fit_inside"
},
{
 "paddingLeft": 0,
 "id": "IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
 "backgroundOpacity": 0,
 "width": 44,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "transparencyActive": true,
 "propagateClick": false,
 "rollOverIconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0_rollover.png",
 "paddingRight": 0,
 "borderSize": 0,
 "shadow": false,
 "height": 44,
 "maxWidth": 101,
 "iconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0.png",
 "mode": "push",
 "horizontalAlign": "center",
 "click": "this.openLink('https://maps.app.goo.gl/v7aXpS11xCXciotU7', '_blank')",
 "maxHeight": 101,
 "data": {
  "name": "IconButton Location"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "cursor": "hand"
},
{
 "layout": "horizontal",
 "paddingLeft": 0,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "shadowColor": "#000000",
 "shadowVerticalLength": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingBottom": 0,
 "class": "Container",
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "right": "15%",
 "borderSize": 0,
 "shadow": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minHeight": 1,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "paddingLeft": 0,
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": false,
 "minWidth": 1,
 "top": "10%",
 "paddingRight": 20,
 "bottom": "80%",
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "horizontalAlign": "right",
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "minHeight": 1,
 "layout": "vertical"
},
{
 "layout": "absolute",
 "paddingLeft": 0,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "shadowColor": "#000000",
 "shadowVerticalLength": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingBottom": 0,
 "class": "Container",
 "overflow": "visible",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "right": "15%",
 "borderSize": 0,
 "shadow": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minHeight": 1,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "layout": "absolute",
 "paddingLeft": 0,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "backgroundOpacity": 1,
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "shadowColor": "#000000",
 "shadowVerticalLength": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingBottom": 0,
 "class": "Container",
 "overflow": "visible",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "right": "15%",
 "borderSize": 0,
 "shadow": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minHeight": 1,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "layout": "vertical",
 "paddingLeft": 0,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "shadowColor": "#000000",
 "shadowVerticalLength": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingBottom": 0,
 "class": "Container",
 "overflow": "visible",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "right": "15%",
 "borderSize": 0,
 "shadow": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minHeight": 1,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "layout": "horizontal",
 "paddingLeft": 0,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "shadowColor": "#000000",
 "shadowVerticalLength": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingBottom": 0,
 "class": "Container",
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "right": "15%",
 "borderSize": 0,
 "shadow": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minHeight": 1,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "paddingLeft": 0,
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "Container",
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": false,
 "minWidth": 1,
 "top": "10%",
 "paddingRight": 20,
 "bottom": "80%",
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "horizontalAlign": "right",
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "minHeight": 1,
 "layout": "vertical"
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_19F18C1C_07DC_A04A_4183_84CC8818C930_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_3EB49E47_233D_FC42_41B5_7505A8F59EFB",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_19F18C1C_07DC_A04A_4183_84CC8818C930_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0329D487_2337_ECC3_41BF_375DB503215C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_10F59B96_232F_ED80_41C0_69FE70F15D69_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0060275C_22EC_2680_41A6_768E36C22272",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_10F59B96_232F_ED80_41C0_69FE70F15D69_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0061D75C_22EC_2680_41B3_1D874AFDB093",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_19881EC8_07DF_A1CB_41A3_BC63A466A66E_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_3EB21E42_233D_FFBD_41A6_0AA3E8FA6FF0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_19881EC8_07DF_A1CB_41A3_BC63A466A66E_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_3EB28E43_233D_FC43_41B3_AF72A642E134",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_10F46F93_232C_2580_41AC_7731FE656D63_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_00649769_22EC_2680_41C7_AA19CE1262CF",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_10F46F93_232C_2580_41AC_7731FE656D63_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_00640769_22EC_2680_41A5_F5E15D94F5FA",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_19884912_07DF_A05E_4183_FBFCC0C02AF6_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_37E1C378_22EC_244C_41B5_8D68357AE207",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_19884912_07DF_A05E_4183_FBFCC0C02AF6_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_37E1B378_22EC_244C_41BB_C98802FADB1B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_198842E3_07DF_E1FD_41A9_B1A5FD362921_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_3EB0AE3F_233D_FFC3_41A1_3226F33E6EFD",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_198842E3_07DF_E1FD_41A9_B1A5FD362921_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_032A8481_2337_ECBF_41BE_420F5D1D49A4",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_10E1BD44_232C_2A80_41A1_41528897E575_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0065876A_22EC_2680_41B2_AF4FEA66D59C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_198BEBAE_07DC_A047_419A_778EFBAF096B_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_3EB57E44_233D_FC46_41C0_B7888100AC9B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_198BEBAE_07DC_A047_419A_778EFBAF096B_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_3EB5FE45_233D_FC47_41BC_BD72B59519BB",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_198BEBAE_07DC_A047_419A_778EFBAF096B_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_3EB46E46_233D_FC45_41BD_FF4C729FF6C6",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_19F10857_07DC_E0C6_41A1_403B4A37CEAD_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_3EB66E51_233D_FC5F_41A2_8E9DC5928DE3",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_198BBA63_07DC_E0FE_419D_725ED087C58E_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_3EB78E4F_233D_FC43_41B1_5F4372149D69",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_198BBA63_07DC_E0FE_419D_725ED087C58E_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_3EB7EE50_233D_FC5D_41BF_5776A8CA5CEB",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_3EB2CE43_233D_FC43_4197_CC01A99046D6",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_19F6225F_07DC_60C6_41A8_CD9A8739208E_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_3EB53E44_233D_FC45_41C1_4F306739500B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 510
  }
 ],
 "id": "AnimatedImageResource_36D5443E_22F4_23C5_41A0_48B6D29BC0CE",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_19E72CD7_07DC_A1C6_41A0_6CC244F87E9A_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_36D5043E_22F4_23C5_41A6_29921329ABDB",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_2C95ABFB_22D4_244C_41AC_80684E166FFC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_2C95EBFC_22D4_2444_41B6_3A57413C3BBF",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_19885EBB_07DC_A04E_41AA_7A5246FD18B5_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_2C921BFC_22D4_2444_4180_7F792693BC8E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_19F7CD1D_07DC_E04A_419C_75371A6181CE_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_37FE9374_22EC_2444_41BE_F2C616CF1519",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_19F7CD1D_07DC_E04A_419C_75371A6181CE_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0014B928_2354_25CC_41B6_5A9AFA0F4162",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_19F522E4_07DC_61FB_41A3_970281A6101B_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 420,
   "height": 330
  }
 ],
 "id": "AnimatedImageResource_3EBEDE3B_233D_FFC3_4187_02244C703EFF",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_19F522E4_07DC_61FB_41A3_970281A6101B_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 640,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_368867C4_22EB_EC44_41AA_239B21E851A7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_19F522E4_07DC_61FB_41A3_970281A6101B_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_032CD47E_2337_EC45_4196_4B2250FE65A5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_10E093C1_232C_5D80_41C1_531C0DCD465E_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_00660760_22EC_2685_41BB_DB27F4204A7A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_10E093C1_232C_5D80_41C1_531C0DCD465E_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0067D766_22EC_2680_41C0_CAFA7E888968",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_10E093C1_232C_5D80_41C1_531C0DCD465E_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_00674767_22EC_2680_41C8_C58820868A61",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_198C60E8_07DC_A1CA_41AC_D33D2FD1B457_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_37FDE371_22EC_245C_41B0_F625D319F33E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_10F43664_232C_2680_41C4_3D6C271F7126_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0066E75E_22EC_2680_41B7_0753579A2B0C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_10F43664_232C_2680_41C4_3D6C271F7126_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0066875F_22EC_2680_41B6_BA3F60DA4DF0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_14AC3ED3_055C_A1DE_41A5_F53A027E9489_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_2C97CBF5_22D4_2447_417B_EA55B53B541C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_19F0C09C_07DC_A04A_41AC_7F2BF7962EF7_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_2C953BFA_22D4_244D_419B_A96DAE27B62C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_19F0C09C_07DC_A04A_41AC_7F2BF7962EF7_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_2C956BFA_22D4_244D_41A3_4F567180FEBE",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_3EB36E40_233D_FFBD_41AB_42B982677C09",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_19F589B9_07DF_A04D_4194_5107CB52B6A3_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_3EB3AE41_233D_FFBF_41C0_F4273D520B49",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1988DB90_07DC_E05A_415A_E9B6E7B6A3D8_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_2C92EBFD_22D4_2444_419F_263E3ED7429F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_10E028FA_232C_2B83_41BB_08FA880BD4BE_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0061475D_22EC_2680_41A0_9500DC9AD402",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_33BAC230_1B45_A05A_419F_03A3C56CB580",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_315AC2E1_22FC_647F_41B7_58901B2343F3",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_16341F59_07DC_60CD_4191_E4DC1CF66C7C_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_37FC4371_22EC_245C_41B2_B193132B43E5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0063175A_22EC_2680_41C6_FAE5DA56E594",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1021FDA0_232F_E580_41C4_92CE96AB3E7B_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0060B75B_22EC_2680_41B6_498A9F9A6AC6",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_19F33EFF_07DF_A1C5_4187_DFFFB19DAA9C_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_3EB1FE3D_233D_FFC7_414D_89EF33E45496",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_19F33EFF_07DF_A1C5_4187_DFFFB19DAA9C_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_3EB04E3E_233D_FFC5_41C1_252B7C7CE7AC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_10E0012F_232C_5A81_41C8_2D2AD8D8E8C7_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0064F768_22EC_2680_4190_B8ED2D211361",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1988B03D_07DC_604A_41A0_B22C45008018_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_36D5943F_22F4_23C3_4196_B1C0762CA64B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1988B03D_07DC_604A_41A0_B22C45008018_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_30C77DA1_22FC_1CFC_417A_B9EF1B4B2BFC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1988B03D_07DC_604A_41A0_B22C45008018_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_01B149BB_2D34_6D80_41C7_4DC164122F64",
 "frameDuration": 41
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "popUpShadowBlurRadius": 6,
 "paddingLeft": 15,
 "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29",
 "popUpShadowColor": "#000000",
 "backgroundOpacity": 1,
 "width": 248,
 "popUpBorderRadius": 0,
 "arrowColor": "#FFFFFF",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "popUpFontColor": "#152D51",
 "borderRadius": 0,
 "paddingBottom": 0,
 "popUpShadowSpread": 1,
 "class": "DropDown",
 "playList": "this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist",
 "rollOverArrowColor": "#152D51",
 "rollOverPopUpBackgroundColor": "#999999",
 "propagateClick": false,
 "pressedBackgroundColor": [
  "#FFFFFF"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0
 ],
 "popUpPaddingLeft": 15,
 "paddingRight": 15,
 "popUpBackgroundColor": "#FFFFFF",
 "height": 60,
 "borderSize": 0,
 "pressedRollOverBackgroundColor": [
  "#152D51"
 ],
 "popUpGap": 2,
 "shadow": false,
 "rollOverBackgroundColor": [
  "#CCCCCC"
 ],
 "fontSize": 12,
 "label": "2 BEDROOM - 1.5 BATHROOM",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#999999",
 "arrowBeforeLabel": false,
 "popUpShadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "popUpPaddingBottom": 10,
 "fontColor": "#333300",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "pressedArrowColor": "#152D51",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "popUpPaddingTop": 10,
 "minHeight": 1,
 "data": {
  "name": "DropDown 1"
 },
 "fontStyle": "normal",
 "paddingTop": 0,
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "popUpShadowBlurRadius": 6,
 "paddingLeft": 15,
 "id": "DropDown_039BA88A_22FC_6B80_41C4_58820562B7EC",
 "popUpShadowColor": "#000000",
 "backgroundOpacity": 1,
 "width": 231,
 "popUpBorderRadius": 0,
 "arrowColor": "#FFFFFF",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "popUpFontColor": "#152D51",
 "borderRadius": 0,
 "paddingBottom": 0,
 "popUpShadowSpread": 1,
 "class": "DropDown",
 "playList": "this.DropDown_039BA88A_22FC_6B80_41C4_58820562B7EC_playlist",
 "rollOverArrowColor": "#152D51",
 "rollOverPopUpBackgroundColor": "#999999",
 "propagateClick": false,
 "pressedRollOverBackgroundColor": [
  "#152D51"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingRight": 15,
 "popUpBackgroundColor": "#FFFFFF",
 "height": 60,
 "borderSize": 0,
 "popUpGap": 2,
 "shadow": false,
 "rollOverBackgroundColor": [
  "#CCCCCC"
 ],
 "fontSize": 12,
 "label": "1 BEDROOM - 1 BATHROOM",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#999999",
 "arrowBeforeLabel": false,
 "popUpPaddingLeft": 15,
 "popUpShadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "popUpPaddingBottom": 10,
 "fontColor": "#333300",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "pressedArrowColor": "#152D51",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "popUpPaddingTop": 10,
 "minHeight": 1,
 "data": {
  "name": "DropDown 1"
 },
 "fontStyle": "normal",
 "paddingTop": 0,
 "fontWeight": "bold"
},
{
 "paddingLeft": 0,
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "scrollBarWidth": 10,
 "minWidth": 1,
 "width": "85%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "Container",
 "overflow": "scroll",
 "verticalAlign": "middle",
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "shadow": false,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minHeight": 1,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "height": "100%"
},
{
 "paddingLeft": 0,
 "id": "Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
 "backgroundOpacity": 1,
 "width": 8,
 "scrollBarWidth": 10,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "Container",
 "overflow": "scroll",
 "verticalAlign": "top",
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "shadow": false,
 "backgroundColor": [
  "#F7931E"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minHeight": 1,
 "data": {
  "name": "orange line"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "height": "100%"
},
{
 "paddingLeft": 50,
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "scrollBarWidth": 10,
 "minWidth": 460,
 "width": "50%",
 "borderRadius": 0,
 "paddingBottom": 20,
 "class": "Container",
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 50,
 "borderSize": 0,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.51,
 "contentOpaque": false,
 "minHeight": 1,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "layout": "vertical",
 "height": "100%"
},
{
 "paddingLeft": 0,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "backgroundOpacity": 0,
 "width": "25%",
 "minWidth": 50,
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "transparencyActive": false,
 "propagateClick": false,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "paddingRight": 0,
 "borderSize": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "maxWidth": 60,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "mode": "push",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "maxHeight": 60,
 "height": "75%",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "minHeight": 50,
 "cursor": "hand"
},
{
 "paddingLeft": 0,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "scrollBarWidth": 10,
 "minWidth": 1,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "Container",
 "overflow": "scroll",
 "verticalAlign": "top",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "height": 140,
 "borderSize": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "minHeight": 1,
 "data": {
  "name": "header"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "itemLabelFontColor": "#666666",
 "selectedItemLabelFontWeight": "bold",
 "borderRadius": 5,
 "itemLabelGap": 7,
 "minWidth": 1,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "verticalAlign": "middle",
 "paddingBottom": 70,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundColorDirection": "vertical",
 "minHeight": 1,
 "selectedItemLabelFontColor": "#F7931E",
 "itemPaddingBottom": 3,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "paddingRight": 70,
 "scrollBarColor": "#F7931E",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "itemMode": "normal",
 "itemLabelFontStyle": "normal",
 "itemThumbnailHeight": 125,
 "itemOpacity": 1,
 "gap": 26,
 "itemMaxWidth": 1000,
 "itemLabelFontFamily": "Montserrat",
 "rollOverItemThumbnailShadowColor": "#F7931E",
 "itemThumbnailWidth": 220,
 "height": "92%",
 "itemMaxHeight": 1000,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "paddingTop": 10,
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "itemHorizontalAlign": "center",
 "selectedItemThumbnailShadow": true,
 "paddingLeft": 70,
 "backgroundOpacity": 0,
 "itemThumbnailShadow": false,
 "rollOverItemLabelFontColor": "#F7931E",
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 0,
 "class": "ThumbnailGrid",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemBackgroundColor": [],
 "itemPaddingTop": 3,
 "propagateClick": false,
 "itemWidth": 220,
 "itemBackgroundColorRatios": [],
 "bottom": -0.2,
 "itemThumbnailOpacity": 1,
 "horizontalAlign": "center",
 "itemPaddingRight": 3,
 "itemMinHeight": 50,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "scrollBarMargin": 2,
 "rollOverItemThumbnailShadow": true,
 "itemHeight": 160,
 "itemVerticalAlign": "top",
 "itemLabelFontSize": 13,
 "data": {
  "name": "ThumbnailList"
 },
 "itemMinWidth": 50,
 "itemThumbnailScaleMode": "fit_outside"
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MapViewer",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "minWidth": 1,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "paddingRight": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "borderSize": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipBorderColor": "#767676",
 "shadow": false,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "paddingTop": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "paddingLeft": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "transitionMode": "blending",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "minHeight": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "paddingLeft": 0,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "scrollBarWidth": 10,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 1,
 "class": "Container",
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingBottom": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "shadow": false,
 "height": 140,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minHeight": 1,
 "data": {
  "name": "header"
 },
 "paddingTop": 0,
 "layout": "absolute"
},
{
 "paddingLeft": 0,
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundOpacity": 0.3,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "scrollBarWidth": 10,
 "minWidth": 1,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "Container",
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minHeight": 1,
 "data": {
  "name": "Container photo"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "height": "100%"
},
{
 "paddingLeft": 0,
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "scrollBarWidth": 10,
 "minWidth": 1,
 "width": "55%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "Container",
 "overflow": "scroll",
 "verticalAlign": "middle",
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "shadow": false,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minHeight": 1,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "height": "100%"
},
{
 "paddingLeft": 0,
 "id": "Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
 "backgroundOpacity": 1,
 "width": 8,
 "scrollBarWidth": 10,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "Container",
 "overflow": "scroll",
 "verticalAlign": "top",
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "shadow": false,
 "backgroundColor": [
  "#F7931E"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minHeight": 1,
 "data": {
  "name": "orange line"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "height": "100%"
},
{
 "paddingLeft": 60,
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "scrollBarWidth": 10,
 "minWidth": 460,
 "width": "45%",
 "borderRadius": 0,
 "paddingBottom": 20,
 "class": "Container",
 "overflow": "visible",
 "verticalAlign": "top",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 60,
 "borderSize": 0,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.51,
 "contentOpaque": false,
 "minHeight": 1,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "layout": "vertical",
 "height": "100%"
},
{
 "paddingLeft": 0,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "backgroundOpacity": 0,
 "width": "25%",
 "minWidth": 50,
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "transparencyActive": false,
 "propagateClick": false,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "paddingRight": 0,
 "borderSize": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "maxWidth": 60,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "mode": "push",
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "maxHeight": 60,
 "height": "75%",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "minHeight": 50,
 "cursor": "hand"
},
{
 "paddingLeft": 0,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "class": "Image",
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "maxWidth": 2000,
 "maxHeight": 1000,
 "height": "100%",
 "data": {
  "name": "photo"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scaleMode": "fit_outside"
},
{
 "paddingLeft": 0,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "Container",
 "overflow": "scroll",
 "verticalAlign": "top",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "height": 60,
 "borderSize": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "minHeight": 0,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "layout": "horizontal",
 "scrollBarOpacity": 0.5
},
{
 "paddingLeft": 0,
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "scrollBarWidth": 10,
 "minWidth": 100,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 30,
 "class": "Container",
 "overflow": "scroll",
 "verticalAlign": "top",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.79,
 "contentOpaque": false,
 "minHeight": 520,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "layout": "vertical",
 "height": "100%"
},
{
 "paddingLeft": 0,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarWidth": 10,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "Container",
 "overflow": "scroll",
 "verticalAlign": "top",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "height": 40,
 "borderSize": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "minHeight": 1,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "layout": "horizontal",
 "scrollBarOpacity": 0.5
},
{
 "paddingLeft": 0,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 50,
 "class": "IconButton",
 "verticalAlign": "top",
 "transparencyActive": false,
 "right": 20,
 "propagateClick": false,
 "top": 20,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "paddingRight": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "horizontalAlign": "right",
 "maxWidth": 60,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "mode": "push",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "maxHeight": 60,
 "height": "36.14%",
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "minHeight": 50,
 "cursor": "hand"
},
{
 "paddingLeft": 0,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 50,
 "class": "IconButton",
 "verticalAlign": "top",
 "transparencyActive": false,
 "right": 20,
 "propagateClick": false,
 "top": 20,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "paddingRight": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "horizontalAlign": "right",
 "maxWidth": 60,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "mode": "push",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "maxHeight": 60,
 "height": "36.14%",
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "minHeight": 50,
 "cursor": "hand"
},
{
 "toolTipPaddingTop": 4,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "minWidth": 1,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "paddingRight": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "borderSize": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipBorderColor": "#767676",
 "shadow": false,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "paddingTop": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "paddingLeft": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "0%",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "transitionMode": "blending",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "minHeight": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "paddingLeft": 0,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "width": "14.22%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minWidth": 50,
 "class": "IconButton",
 "verticalAlign": "middle",
 "transparencyActive": false,
 "paddingBottom": 0,
 "propagateClick": false,
 "top": "20%",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "paddingRight": 0,
 "bottom": "20%",
 "borderSize": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "maxWidth": 60,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "mode": "push",
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "maxHeight": 60,
 "data": {
  "name": "IconButton <"
 },
 "paddingTop": 0,
 "minHeight": 50,
 "cursor": "hand"
},
{
 "paddingLeft": 0,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "backgroundOpacity": 0,
 "width": "14.22%",
 "borderRadius": 0,
 "minWidth": 50,
 "class": "IconButton",
 "verticalAlign": "middle",
 "transparencyActive": false,
 "right": 10,
 "propagateClick": false,
 "top": "20%",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "paddingRight": 0,
 "bottom": "20%",
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "maxWidth": 60,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "mode": "push",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "maxHeight": 60,
 "data": {
  "name": "IconButton >"
 },
 "paddingTop": 0,
 "minHeight": 50,
 "cursor": "hand"
},
{
 "paddingLeft": 0,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "backgroundOpacity": 0,
 "width": "10%",
 "borderRadius": 0,
 "minWidth": 50,
 "class": "IconButton",
 "verticalAlign": "top",
 "transparencyActive": false,
 "right": 20,
 "propagateClick": false,
 "top": 20,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "paddingRight": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "horizontalAlign": "right",
 "maxWidth": 60,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "mode": "push",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "maxHeight": 60,
 "height": "10%",
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "minHeight": 50,
 "cursor": "hand"
},
{
 "paddingLeft": 0,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "class": "Image",
 "verticalAlign": "bottom",
 "paddingBottom": 0,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "maxWidth": 2000,
 "maxHeight": 1000,
 "height": "100%",
 "data": {
  "name": "Image"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scaleMode": "fit_outside"
},
{
 "paddingLeft": 0,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "Container",
 "overflow": "scroll",
 "verticalAlign": "top",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "height": 60,
 "borderSize": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "minHeight": 0,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "layout": "horizontal",
 "scrollBarOpacity": 0.5
},
{
 "paddingLeft": 0,
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "scrollBarWidth": 10,
 "minWidth": 100,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 30,
 "class": "Container",
 "overflow": "scroll",
 "verticalAlign": "top",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.79,
 "contentOpaque": false,
 "minHeight": 520,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "layout": "vertical",
 "height": "100%"
},
{
 "paddingLeft": 0,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarWidth": 10,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "Container",
 "overflow": "scroll",
 "verticalAlign": "top",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "height": 40,
 "borderSize": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "minHeight": 1,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "layout": "horizontal",
 "scrollBarOpacity": 0.5
},
{
 "paddingLeft": 10,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 20,
 "class": "HTMLText",
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#F7931E",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.32vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.61vh;font-family:'Montserrat';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.61vh;font-family:'Montserrat';\"><B>DOLOR SIT AMET</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.86vh;font-family:'Montserrat';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.86vh;font-family:'Montserrat';\"><B>DONEC FEUGIAT:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.64vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.86vh;font-family:'Montserrat';\"><B>LOREM IPSUM:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:2.51vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "minHeight": 1,
 "data": {
  "name": "HTMLText"
 },
 "paddingTop": 0
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Montserrat",
 "paddingLeft": 0,
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "backgroundOpacity": 0.8,
 "width": 180,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "Button",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "iconWidth": 32,
 "propagateClick": false,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "height": 50,
 "borderSize": 0,
 "shadow": false,
 "fontSize": "1.96vh",
 "label": "LOREM IPSUM",
 "mode": "push",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "rollOverBackgroundOpacity": 1,
 "backgroundColor": [
  "#F7931E"
 ],
 "fontColor": "#FFFFFF",
 "minHeight": 1,
 "data": {
  "name": "Button Lorem Ipsum"
 },
 "fontStyle": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "bold",
 "shadowSpread": 1
},
{
 "paddingLeft": 0,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 10,
 "class": "HTMLText",
 "propagateClick": false,
 "paddingRight": 0,
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "45%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.32vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.61vh;font-family:'Montserrat';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.61vh;font-family:'Montserrat';\"><B>DOLOR SIT AMET</B></SPAN></SPAN></DIV></div>",
 "minHeight": 1,
 "data": {
  "name": "HTMLText18899"
 },
 "paddingTop": 0
},
{
 "paddingLeft": 0,
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "backgroundOpacity": 0.3,
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "scrollBarWidth": 10,
 "minWidth": 1,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "Container",
 "overflow": "scroll",
 "verticalAlign": "top",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minHeight": 1,
 "data": {
  "name": "- content"
 },
 "paddingTop": 0,
 "layout": "horizontal",
 "height": "80%"
},
{
 "paddingLeft": 0,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "backgroundOpacity": 0,
 "width": "25%",
 "borderRadius": 0,
 "minWidth": 1,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "class": "Image",
 "verticalAlign": "top",
 "paddingBottom": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "shadow": false,
 "horizontalAlign": "left",
 "maxWidth": 200,
 "maxHeight": 200,
 "height": "100%",
 "data": {
  "name": "agent photo"
 },
 "paddingTop": 0,
 "minHeight": 1,
 "scaleMode": "fit_inside"
},
{
 "paddingLeft": 10,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "backgroundOpacity": 0,
 "width": "75%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingBottom": 10,
 "class": "HTMLText",
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#F7931E",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.97vh;font-family:'Montserrat';\"><B>JOHN DOE</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.64vh;font-family:'Montserrat';\">LICENSED REAL ESTATE SALESPERSON</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "minHeight": 1,
 "data": {
  "name": "HTMLText19460"
 },
 "paddingTop": 0
}],
 "borderSize": 0,
 "mobileMipmappingEnabled": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": true,
 "buttonToggleFullscreen": "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "scripts": {
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getKey": function(key){  return window[key]; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "existsKey": function(key){  return key in window; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; }
 },
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "minHeight": 20,
 "data": {
  "name": "Player468"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "height": "100%",
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
