# MIM- A Torrent Client

## Overview

MIM is a command line GUI torrent application that lets you download torrent files from the internet. As opposed to the general notion that torrents are used for piracy, a lot of stuff on the internet is downloadable through torrents (peer 2 peer networks). For instance, many popular Linux distros are easily downloadable through torrent clients at very fast speeds due to the peer-2-peer network capabilities. We aim to implement such a client, that can download files from the internet through .torrent files and magnet links. It involves deep knowledge of networking and an understanding of peer-2-peer communication using the BitTorrent protocol.

## How to install

`cargo install --path crates/mim`

## How to run

`mim` is a command line application. You can run it by typing `mim` in your terminal. It has two subcommands: `server` and `download`. The `server` subcommand starts a server that can be used to download files. The `download` subcommand can be used to download files from the server. You can also use the `--help` flag to get more information about the subcommands.

```
Usage: mim [OPTIONS] <COMMAND>
Commands:
  server
  download
  help      Print this message or the help of the given subcommand(s)

Options:
  -v <LOG_LEVEL>
          The loglevel [possible values: trace, debug, info, warn, error]
  -i, --tracker-refresh-interval <FORCE_TRACKER_INTERVAL>
          The interval to poll trackers, e.g. 30s. Trackers send the refresh interval when we connect to them. Often this is pretty big, e.g. 30 minutes. This can force a certain value
      --http-api-listen-addr <HTTP_API_LISTEN_ADDR>
          The listen address for HTTP API [default: 127.0.0.1:3030]
  -s, --single-thread-runtime
          Set this flag if you want to use tokio's single threaded runtime. It MAY perform better, but the main purpose is easier debugging, as time profilers work better with this one
      --disable-dht

      --disable-dht-persistence
          Set this to disable DHT reading and storing it's state. For now this is a useful workaround if you want to launch multiple mim instances, otherwise DHT port will conflict
      --peer-connect-timeout <PEER_CONNECT_TIMEOUT>
          The connect timeout, e.g. 1s, 1.5s, 100ms etc
      --peer-read-write-timeout <PEER_READ_WRITE_TIMEOUT>
          The connect timeout, e.g. 1s, 1.5s, 100ms etc
  -t, --worker-threads <WORKER_THREADS>
          How many threads to spawn for the executor
  -h, --help
          Print help
  -V, --version
          Print version
```

### Server

`server` subcommand starts a server that can be used to download files. It has the following options:

```
Usage: mim server <COMMAND>

Commands:
start
help Print this message or the help of the given subcommand(s)

Options:
-h, --help Print help

```

#### Start

`start` subcommand starts the server. It has the following options:

```
Usage: mim server start <OUTPUT_FOLDER>
```

### Download

`download` subcommand can be used to download files from the server. It has the following options:

```
Usage: mim download [OPTIONS] [TORRENT_PATH]...

Arguments:
[TORRENT_PATH]... The filename or URL of the torrent. If URL, http/https/magnet are supported

Options:
-o, --output-folder <OUTPUT_FOLDER>
The output folder to write to. If not exists, it will be created. If not specified, would use the server's output folder. If there's no server running, this is required
-s, --sub-folder <SUB_FOLDER>
The sub folder within output folder to write to. Useful when you have a server running with output_folder configured, and don't want to specify the full path every time
-r, --filename-re <ONLY_FILES_MATCHING_REGEX>
If set, only the file whose filename matching this regex will be downloaded
-l, --list
Only list the torrent metadata contents, don't do anything else
--overwrite
Set if you are ok to write on top of existing files
-h, --help
Print help
```

## Goals

Build a simple torrent application that doesn't spam you with ads and remains in the terminal using Rust.
Build a command-line utility for BitTorrent torrent file creation and verification.
Download popular Linux distros through our client.
Prerequisites
Knowledge of programming basics (Go/Rust will be a bonus)
Interest in networking.
Familiar with Linux
The candidate should be eager to learn and ready to put in a focused effort. All other things required to do the project can be learned along the way.
Learning Objectives
To inculcate essential software engineering skills such as writing quality code
Learn Rust language
Understand concepts of networking, how peer-2-peer communication happens, and how the BitTorrent protocol works.
Learn asynchronous programming and its application in our networking environment.
Build a GUI for this application using React

## Resources

Fundamentals of computer networks
Basics of networking course:
https://in.coursera.org/learn/computer-networking
Computer Networking Videos: https://www.youtube.com/playlist?list=PLpherdrLyny-zJw95jcE-uJkcsIAG1MEn
Tanenbaum, Wetherall Computer Networks 5e:
https://media.pearsoncmg.com/ph/streaming/esm/tanenbaum5e_videonotes/tanenbaum_videoNotes.html

The Rust Programming Language
Official book:
https://doc.rust-lang.org/stable/book/
Youtube Playlist:
https://www.youtube.com/watch?v=OX9HJsJUDxA&list=PLai5B987bZ9CoVR-QEIN9foz4QCJ0H2Y8
https://www.youtube.com/watch?v=5QsEuoIt7JQ&list=PLSbgTZYkscaoV8me47mKqSM6BBSZ73El6

Getting to know more about torrent
What is torrent:
https://www.techslang.com/torrenting-what-is-it-and-how-does-it-work/

BitTorrent protocol:
https://www.bittorrent.org/beps/bep_0003.html

Existing GitHub implementation
https://github.com/kenpratt/rusty_torrent
https://github.com/mdiflorio/torrenter
https://github.com/mandreyel/cratetorrent
https://github.com/casey/intermodal
https://github.com/jackpal/Taipei-Torrent

# Milestones

## Things that need to be done before the next meeting

- [x] Reading .torrent files (single-file torrents only)
- [x] Connecting to a tracker to discover peers
- [x] Downloading a file from multiple peers in parallel
- [x] Queueing multiple requests with each peer for faster downloading (aka pipelining)
- [x] Uploading files to peers, and seeding existing files from disk
- [x] Resuming partial downloads
- [x] Verification of correctness of downloaded chunks
- [x] Multi-file torrents
- [x] Connecting to multiple trackers
- [x] Asynchronous IO on a multithreaded runtime
- [x] Add tests
- [x] Setup a listener for seeding to peers.
- [x] DHT

## TODO

- [ ] Improve error handling and add retries for the tracker
- [ ] Per-file stats
- [ ] Per-peer stats
- [ ] PEX, NAT traversal for more peers
- [ ] Upload throttling/congestion control
- [ ] GUI for the terminal
- [ ] Piece paging/caching
- [ ] Signaling when completed download
- Optimizations
  - [ ] when we have the whole torrent, there's no point talking to peers that also have the whole torrent

```

```

```

```

```

```
