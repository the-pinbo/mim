#! /bin/bash
rm -rf target
cargo build --release
cargo run --bin mim server start ./downloads
