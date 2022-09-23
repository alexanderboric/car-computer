# Distributed under the OSI-approved BSD 3-Clause License.  See accompanying
# file Copyright.txt or https://cmake.org/licensing for details.

cmake_minimum_required(VERSION 3.5)

file(MAKE_DIRECTORY
  "/Users/alexanderboric/esp/esp-idf/components/bootloader/subproject"
  "/Users/alexanderboric/esp/esp-idf/examples/bluetooth/bluedroid/classic_bt/a2dp_sink/build/bootloader"
  "/Users/alexanderboric/esp/esp-idf/examples/bluetooth/bluedroid/classic_bt/a2dp_sink/build/bootloader-prefix"
  "/Users/alexanderboric/esp/esp-idf/examples/bluetooth/bluedroid/classic_bt/a2dp_sink/build/bootloader-prefix/tmp"
  "/Users/alexanderboric/esp/esp-idf/examples/bluetooth/bluedroid/classic_bt/a2dp_sink/build/bootloader-prefix/src/bootloader-stamp"
  "/Users/alexanderboric/esp/esp-idf/examples/bluetooth/bluedroid/classic_bt/a2dp_sink/build/bootloader-prefix/src"
  "/Users/alexanderboric/esp/esp-idf/examples/bluetooth/bluedroid/classic_bt/a2dp_sink/build/bootloader-prefix/src/bootloader-stamp"
)

set(configSubDirs )
foreach(subDir IN LISTS configSubDirs)
    file(MAKE_DIRECTORY "/Users/alexanderboric/esp/esp-idf/examples/bluetooth/bluedroid/classic_bt/a2dp_sink/build/bootloader-prefix/src/bootloader-stamp/${subDir}")
endforeach()
