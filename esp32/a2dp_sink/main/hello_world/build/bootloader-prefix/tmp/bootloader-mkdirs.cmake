# Distributed under the OSI-approved BSD 3-Clause License.  See accompanying
# file Copyright.txt or https://cmake.org/licensing for details.

cmake_minimum_required(VERSION 3.5)

file(MAKE_DIRECTORY
  "/Users/alexanderboric/esp/esp-idf/components/bootloader/subproject"
  "/Users/alexanderboric/Desktop/Projeket Auto/car-computer/esp32/a2dp_sink/main/hello_world/build/bootloader"
  "/Users/alexanderboric/Desktop/Projeket Auto/car-computer/esp32/a2dp_sink/main/hello_world/build/bootloader-prefix"
  "/Users/alexanderboric/Desktop/Projeket Auto/car-computer/esp32/a2dp_sink/main/hello_world/build/bootloader-prefix/tmp"
  "/Users/alexanderboric/Desktop/Projeket Auto/car-computer/esp32/a2dp_sink/main/hello_world/build/bootloader-prefix/src/bootloader-stamp"
  "/Users/alexanderboric/Desktop/Projeket Auto/car-computer/esp32/a2dp_sink/main/hello_world/build/bootloader-prefix/src"
  "/Users/alexanderboric/Desktop/Projeket Auto/car-computer/esp32/a2dp_sink/main/hello_world/build/bootloader-prefix/src/bootloader-stamp"
)

set(configSubDirs )
foreach(subDir IN LISTS configSubDirs)
    file(MAKE_DIRECTORY "/Users/alexanderboric/Desktop/Projeket Auto/car-computer/esp32/a2dp_sink/main/hello_world/build/bootloader-prefix/src/bootloader-stamp/${subDir}")
endforeach()
