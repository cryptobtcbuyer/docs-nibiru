---
order: 2
---

# Reset a validator node

Instructions for validators to rebuild in the case of a chain reset. {synopsis}

Any upcoming resets will be announced in the `#testnet` channel on [Nibiru's Discord server](https://discord.com/invite/sgPw8ZYfpQ).
To reset your node and rejoin the testnet, please follow the steps below:

## Remove the old chain data and binary

```bash
sudo rm -rf $HOME/.nibid
sudo rm $HOME/go/bin/nibid
```

## Install the new binary version

```bash
git clone https://github.com/NibiruChain/nibiru.git # (https)
cd nibiru
git fetch --tags
git checkout v0.16.3
make install
```

Verify the binary version by running

```bash
nibid version
# > v0.16.3
```

## Recreate the validator

Follow the same steps from ["Joining Testnet"](../testnet/README.md) and ["Validating on Testnet"](README.md) again.
