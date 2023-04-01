use clap::{ ValueEnum};
use std::{net::SocketAddr, path::PathBuf, str::FromStr, sync::Arc, time::Duration};

pub fn get_greetings(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}
#[derive(Debug, Clone, Copy, ValueEnum)]
enum LogLevel {
    Trace,
    Debug,
    Info,
    Warn,
    Error,
}

#[derive(Debug, Clone, Copy)]
struct ParsedDuration(Duration);
impl FromStr for ParsedDuration {
    type Err = parse_duration::parse::Error;

    fn from_str(s: &str) -> Result<Self, Self::Err> {
        parse_duration::parse(s).map(ParsedDuration)
    }
}
struct Opts {
    /// The loglevel
    log_level: Option<LogLevel>,

    /// The interval to poll trackers, e.g. 30s.
    /// Trackers send the refresh interval when we connect to them. Often this is
    /// pretty big, e.g. 30 minutes. This can force a certain value.
    force_tracker_interval: Option<ParsedDuration>,

    /// The listen address for HTTP API
    http_api_listen_addr: SocketAddr,

    /// Set this flag if you want to use tokio's single threaded runtime.
    /// It MAY perform better, but the main purpose is easier debugging, as time
    /// profilers work better with this one.
    single_thread_runtime: bool,


    /// Set this to disable DHT.
    disable_dht: bool,

    /// Set this to disable DHT reading and storing it's state.
    /// For now this is a useful workaround if you want to launch multiple mim instances,
    /// otherwise DHT port will conflict.
    disable_dht_persistence: bool,

    /// The connect timeout, e.g. 1s, 1.5s, 100ms etc.
    peer_connect_timeout: Option<ParsedDuration>,

    /// The connect timeout, e.g. 1s, 1.5s, 100ms etc.
    peer_read_write_timeout: Option<ParsedDuration>,

    /// How many threads to spawn for the executor.
    worker_threads: Option<usize>,

    // subcommand: SubCommand,
}

pub fn start_server(name: &str) -> String {
    // The loglevel [possible values: trace, debug, info, warn, error]
    let log_level:&str = "info";
    let worker_threads:&str = "8";
    let server_path:&str = "./downloads";
    let cmd = format!("mim -l {} -w {} -s {}", log_level, worker_threads, server_path);
    println!("Starting mim server with command: {}", cmd);
    



    format!("Hello, {}! You've been greeted from Rust!", name)
}