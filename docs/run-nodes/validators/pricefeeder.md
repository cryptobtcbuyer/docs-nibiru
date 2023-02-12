---
order: 3
---

# Set up a pricefeeder

Instructions for validators to set up a pricefeeder daemon. {synopsis}

## Environment Variables

```
CHAIN_ID="nibiru-testnet-3"
GRPC_ENDPOINT="localhost:9090"
WEBSOCKET_ENDPOINT="ws://localhost:26657/websocket"
FEEDER_MNEMONIC="<your mnemonic>"
EXCHANGE_SYMBOLS_MAP='{ "bitfinex": { "ubtc:uusd": "tBTCUSD", "ueth:uusd": "tETHUSD", "uusdt:uusd": "tUSTUSD" }, "binance": { "ubtc:uusd": "BTCUSD", "ueth:uusd": "ETHUSD", "uusdt:uusd": "USDTUSD", "uusdc:uusd": "USDCUSD", "uatom:uusd": "ATOMUSD", "ubnb:uusd": "BNBUSD", "uavax:uusd": "AVAXUSD", "usol:uusd": "SOLUSD", "uada:uusd": "ADAUSD", "ubtc:unusd": "BTCUSD", "ueth:unusd": "ETHUSD", "uusdt:unusd": "USDTUSD", "uusdc:unusd": "USDCUSD", "uatom:unusd": "ATOMUSD", "ubnb:unusd": "BNBUSD", "uavax:unusd": "AVAXUSD", "usol:unusd": "SOLUSD", "uada:unusd": "ADAUSD" } }'
```

## From source

```bash
git clone https://github.com/nibiruchain/pricefeeder
cd pricefeeder
make run
```

## From pre-compiled binary

```bash
wget https://github.com/NibiruChain/pricefeeder/releases/download/v0.1.0-rc3/pricefeeder_0.1.0-rc3_linux_amd64.tar.gz
tar -xvf pricefeeder_0.1.0-rc3_linux_amd64.tar.gz
sudo mv pricefeeder /usr/local/bin
pricefeeder
```
