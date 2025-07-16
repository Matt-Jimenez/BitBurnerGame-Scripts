# 💾 Bitburner Automation Script Suite

Welcome to the **Bitburner Automation Script Suite** – a collection of Netscript (.js) files designed to help players **automate and maximize profit** within the Bitburner cyberpunk hacking simulation game.

---

## ⚠️ DISCLAIMER

**These scripts are intended strictly for use within the Bitburner game and will not work in real-life systems.** Bitburner simulates hacking for educational and entertainment purposes. These scripts are written in Netscript, a game-specific JavaScript variant.

---

## 📦 Included Scripts

| File Name           | Purpose                                                   |
|---------------------|-----------------------------------------------------------|
| `weaken.js`         | Lowers the security level of a target server              |
| `grow.js`           | Increases the money available on a target server          |
| `hack.js`           | Hacks a target server to steal money                      |
| `batch-hack.js`     | Runs an optimized HWGW (Hack-Weaken-Grow-Weaken) batch    |
| `auto-batch-runner.js` | Deploys and runs batch-hack on multiple servers      |

---

## 🛠️ Installation & Usage

### 1. ⬇️ Import Scripts into Bitburner
1. Download the full script bundle.
2. Extract the `.zip` and upload the `.js` files to your Bitburner environment:
    - Use the in-game **Script Editor (Nano)** to paste code.
    - Or use `scp` commands in Bitburner to transfer from `home` to other servers.

---

### 2. 🚀 Run Your First Script

Start by hacking an easy server like `n00dles`:

```js
run batch-hack.js n00dles
```

---

### 3. 🤖 Automate Batch Deployment

Run:
```js
run auto-batch-runner.js
```

This will:
- Check for root access
- Copy all necessary scripts to target servers
- Launch batch-hack on each one automatically

---

## 💡 Recommended Progression

### 🔓 Gain Access to More Servers
- Purchase and use `BruteSSH.exe`, `FTPCrack.exe`, etc.
- Use a scanner script to discover and root all available servers.

### 📈 Target High-Value Servers
- Progress to better servers like: `phantasy`, `joesguns`, `harakiri-sushi`
- Eventually: `megacorp`, `ecorp`, `fulcrumtech`

### 💻 Buy and Upgrade Servers
- Use `purchaseServer()` to buy and upgrade servers.
- Host batch operations from them.

### 🏦 Join Factions
- Use hacking to gain favor and unlock augmentations.

### 📊 Use `Formulas.exe` (Late Game)
- Calculate precise hacking formulas and thread requirements.

---

## 🎮 What is Bitburner?

> *Bitburner is a cyberpunk-themed incremental hacking game where you script your way to digital dominance.*  
> Available on [Steam](https://store.steampowered.com/app/1812820/Bitburner/) and the [web](https://danielyxie.github.io/bitburner/).

---

Happy hacking, and remember:

> *"In the console, no one can hear you script."*
