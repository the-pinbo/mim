# MIM- A Torrent Client

## Overview

MIM is a command line GUI torrent application that lets you download torrent files from the internet. As opposed to the general notion that torrents are used for piracy, a lot of stuff on the internet is downloadable through torrents (peer 2 peer networks). For instance, many popular Linux distros are easily downloadable through torrent clients at very fast speeds due to the peer-2-peer network capabilities. We aim to implement such a client, that can download files from the internet through .torrent files and magnet links. It involves deep knowledge of networking and an understanding of peer-2-peer communication using the BitTorrent protocol.

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

- [ ] Reading .torrent files (single-file torrents only)
- [ ] Connecting to a tracker to discover peers
- [ ] Downloading a file from multiple peers in parallel
- [ ] Queueing multiple requests with each peer for faster downloading (aka pipelining)
- [ ] Uploading files to peers, and seeding existing files from disk
- [ ] Resuming partial downloads
- [ ] Verification of correctness of downloaded chunks
- [ ] Multi-file torrents
- [ ] Connecting to multiple trackers
- [ ] A command-line utility for BitTorrent torrent file creation, verification, and inspection

## Things that need to be done before the final presentation

- [ ] Add tests
- [ ] Setup a listener for seeding to peers.
- [ ] Improve error handling and add retries for the tracker.
- [ ] Update tracker regularly and update list of peers.
- [ ] DHT, PEX, NAT traversal for more peers
- [ ] Asynchronous IO on a multithreaded runtime
- [ ] Upload throttling/congestion control
- [ ] GUI for the terminal.
- [ ] uTorrent transport protocol
- [ ] Piece paging/caching
