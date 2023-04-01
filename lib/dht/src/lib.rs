mod bprotocol;
mod dht;
mod persistence;
mod routing_table;
mod utils;

pub use crate::dht::DhtStats;
pub use crate::dht::{Dht, DhtConfig};
pub use libmim_core::id20::Id20;
pub use persistence::{PersistentDht, PersistentDhtConfig};

pub static DHT_BOOTSTRAP: &[&str] = &["dht.transmissionbt.com:6881", "dht.libtorrent.org:25401"];
