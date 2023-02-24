---
order: 1
---

# Joining Testnet

Testnets are testing instances of the Nibiru blockchain. Testnet tokens are separate and distinct from real assets. In order to join a network, you'll need to use its corresponding version of the binary to [run a full node](./node-daemon).{synopsis}

## Available Networks

You can find a table of each Nibiru testnet and its current status below.

| Network | Chain ID         | Description              | Version                                                               | Status |
| ------- | ---------------- | ------------------------ | --------------------------------------------------------------------- | ------ |
| Testnet | nibiru-testnet-2 | Nibiru's default testnet | [v0.16.3](https://github.com/NibiruChain/nibiru/releases/tag/v0.16.3) | Deprecated |
| Testnet | nibiru-itn-1 | Nibiru's incentivized testnet | [v0.19.2](https://github.com/NibiruChain/nibiru/releases/tag/v0.19.2)  | Active |

::: tip
You can see current status of the blockchain at the [Nibiru Block Explorer](https://explorer.testnet.nibiru.fi/).
The explorer allows you to search through transactions, blocks, wallet addresses, and other on-chain data.
:::

## Blockchain Parameters

| Chain ID         | Block Time | Unbonding Time | Voting Period |
| ---------------- | ---------- | -------------- | ------------- |
| nibiru-testnet-2 | 2 seconds  | 2 hours        | 24 hours      |
| nibiru-itn-1 | 1.5 seconds  | 24 hours        | 2 hours      |

---

## Pre-requisites

### Minimum hardware requirements

- 4CPU
- 16GB RAM
- 1000GB of disk space (SSD)

### Update the system

```bash
sudo apt update && sudo apt upgrade --yes
```

### Install nibid

```bash
curl -s https://get.nibiru.fi/@v0.19.2! | bash
```

### Verify nibid version

```bash
nibid version

# v0.19.2
```

---

## Init the Chain

1. Init the chain

    ```bash
    nibid init <moniker-name> --chain-id=nibiru-itn-1 --home $HOME/.nibid
    ```

2. Create a local key pair

    ```bash
    nibid keys add <key-name>
    ```

3. Copy the genesis file to the `$HOME/.nibid/config` folder.
  
    You can get genesis from our networks endpoint with:

    ```bash
    NETWORK=nibiru-itn-1
    curl -s https://networks.itn.nibiru.fi/$NETWORK/genesis > $HOME/.nibid/config/genesis.json
    ```

    Or you can download it from the Tendermint RPC endpoint.

    ```bash
    curl -s https://rpc.itn-1.nibiru.fi/genesis | jq -r .result.genesis > $HOME/.nibid/config/genesis.json
    ```
  
    **(Optional) Verify Genesis File Checksum**

    ```bash
    shasum -a 256 $HOME/.nibid/config/genesis.json

    # e162ace87f5cbc624aa2a4882006312ef8762a8a549cf4a22ae35bba12482c72 $HOME/.nibid/config/genesis.json
    ```

4. Update seeds list in the configuration file `$HOME/.nibid/config/config.toml`.

    ```bash
    NETWORK=nibiru-itn-1
    sed -i 's|seeds =.*|seeds = "'$(curl -s https://networks.itn.nibiru.fi/$NETWORK/seeds)'"|g' $HOME/.nibid/config/config.toml
    ```

5. Set minimum gas prices

    ```bash
    sed -i 's/minimum-gas-prices =.*/minimum-gas-prices = "0.025unibi"/g' $HOME/.nibid/config/app.toml
    ```

6. Setup state-sync parameters for catching up faster with the network (optional, but recommended)

    ```bash
    NETWORK=nibiru-itn-1
    sed -i 's|enable =.*|enable = true|g' $HOME/.nibid/config/config.toml
    sed -i 's|rpc_servers =.*|rpc_servers = "'$(curl -s https://networks.itn.nibiru.fi/$NETWORK/rpc_servers)'"|g' $HOME/.nibid/config/config.toml
    sed -i 's|trust_height =.*|trust_height = "'$(curl -s https://networks.itn.nibiru.fi/$NETWORK/trust_height)'"|g' $HOME/.nibid/config/config.toml
    sed -i 's|trust_hash =.*|trust_hash = "'$(curl -s https://networks.itn.nibiru.fi/$NETWORK/trust_hash)'"|g' $HOME/.nibid/config/config.toml
    ```

7. Start your node (choose one of the options)

    ```bash
    # without a daemon
    nibid start

    # with systemd
    sudo systemctl start nibiru

    # with cosmovisor
    sudo systemctl start cosmovisor-nibiru
    ```

8. Request tokens from the [Web Faucet for nibiru-itn-1](https://faucet.itn-1.nibiru.fi/) if required.

    ```bash
    FAUCET_URL="https://faucet.itn-1.nibiru.fi/"
    ADDR="..." # your address 
    curl -X POST -d '{"address": "'"$ADDR"'", "coins": ["11000000unibi","100000000unusd","100000000uusdt"]}' $FAUCET_URL
    ```

    <!-- Please note, that current daily limit for the Web Faucet is 11NIBI (`11000000unibi`) and 100 NUSD (`100000000unusd`). -->

    You can also use the testnet Faucet from the `#faucet` channel of the [Nibiru Chain Discord](https://discord.gg/sgPw8ZYfpQ).

---

## Next Steps

::: tip
See the [validator docs](../validators) on how to participate as a validator.
:::

## Example `nibid` commands

Ex: Query to see which pools are open for trading on Nibi-Perps and the current mark and index prices.

```bash
nibid query vpool all-pools
```

Ex: Open a long position on BTC with 10 leverage with 100 μNUSD as margin and uncapped slippage tolerance.

```bash
# command
nibid tx perp open-position buy|sell pair leverage quoteAmt baseAmtLimit [flags]
# example
nibid tx perp open-position buy ubtc:unusd 10 100 0 --from <key> --home $HOME/.nibid
```

For the full list of `nibid` commands, see:

- The [`nibid` CLI introduction](../../dev/cli)
- Nibiru [Module Reference](../../dev/x)
