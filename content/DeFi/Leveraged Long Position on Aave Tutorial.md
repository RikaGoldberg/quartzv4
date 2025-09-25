Source: https://medium.com/furucombo/leveraged-long-position-tutorial-6161c9718812

![](https://miro.medium.com/v2/resize:fit:1400/1*8mWNZIKfdCfR7G-hPw9TMg.png)

This tutorial will help you to create a leveraged position on [Furucombo](https://furucombo.app/). This combination will allow you to increase your leveraged position on a lending protocol, such as Aave, to increase your long position on the market. If you are more of a visual learner, you can use our [video tutorial for long positions](https://youtu.be/wocvDAdKq1U) instead.

# What is a Leveraged Position?

==A leveraged position is one that increases your market exposure over and above the original asset value. For example, a 2x leverage is one that has 2x more exposure than your base position.== This is possible with Aave because you can borrow funds from your collateral. ==For example, if you have ETH as collateral, you can borrow a stable coin, such as USDC, and use that to purchase more ETH, therefore increasing your exposure to the market higher than would otherwise be possible with your original funds amount.==

# How to Create a Leveraged Long Position?

==A leveraged long position can be created by borrowing a stable coin, and swapping that to the asset you wish to go long on (an asset you expect to increase in value). For example, if you deposit $1000 in ETH into Aave, you can borrow $800 in USDC (a stable token), and swap that USDC to ETH, creating a market exposure of $1800 in ETH. If ETH increases in value, you will have to pay back less of the value that you used to borrow from the USDC because the ETH is a higher value.

Always be aware that leveraged positions are subject to liquidation risk if the collateral falls below the loan-to-value ratio of the amount borrowed. The risk in this case would come from a decrease in the value of ETH (because there are less funds to pay back the borrowed funds).

# Steps to set up a New Leveraged Long Position:

1. Connect your wallet, and select the network of your choice on the top right of [create mode on Furucombo](https://furucombo.app/combo). Once connected, click the cube icon in the center of the page to get started. The first step is to make a position on Aave, and to decide which asset to use as collateral to go long on. When you have decided on which asset to deposit, simply add the ‘Deposit’ cube under Aave, and make a deposit in the asset you wish to use as collateral. If you wish to go long on Ethereum, deposit Ethereum.

![](https://miro.medium.com/v2/resize:fit:1400/0*Z9UnXzNpn4DvyUM3)

2. Next we will use a ‘Return Funds’ cube to add the aToken to the contract in order to borrow an asset in one transaction. In this example, we will add the aEthWETH token in our return funds cube. If you deposit a different asset, simply carry over the aToken and the amount into the return funds cube.

![](https://miro.medium.com/v2/resize:fit:1400/0*o911BwBToctKT5Kv)

3. Now we can borrow a stable token from Aave. We will borrow USDC in this case, but you can choose any stable token that’s available on the lending protocol of your choice. At the time of writing, ETH is worth approximately $1750, so we will borrow 75% of our LTV, therefore we will borrow 1312.50 USDC.

![](https://miro.medium.com/v2/resize:fit:1400/0*n6lXPmsvBSxYBa0R)

4. Next we will swap the borrowed USDC to ETH to increase our leverage or exposure to the ETH asset.

![](https://miro.medium.com/v2/resize:fit:1400/0*yDGpPBV4TwDwqUOO)

5. Once you are happy with the numbers, you can hit ‘approve’ & ‘send’ at the bottom of the page. You have now created a leveraged position using Furucombo.

==In the above example, we have made a deposit of 1ETH, borrowed USDC, and swapped that to ETH, creating a position of 1.746ETH from a deposit of 1ETH. This means the leverage created in this example is 1.746x, or 174.6%. This means that any 1% increase in Ethereum, will equal a 1.746% increase in value for the leveraged user.== This is a powerful way to get additional exposure to the market. ==Also be aware of the risks of liquidation. If the value of the collateral decreases, you may be subject to liquidation risk. If that risk occurs, you can add more collateral, or perform our de-leverage strategy to reduce your market risk.

# Steps to Adjust your Leveraged Position with a Flash Loan

You can also use the flash loan feature to add a collateral position, and borrow an asset with that collateral to increase your exposure to the market. For example, if you have $1000 in collateral on Aave, and you’ve borrowed $600, or have a debt ratio of 60%, you can use a flash loan to increase your collateral position, and use some of the extra debt you can still incur to pay back the flash loan. Using the aforementioned numbers, let’s assume you want to increase your position by $1000. Assuming an ETH price of $1750, to increase the position by $1000, we need to borrow $800 (as we will borrow the other $200 from Aave in order to make up the difference) in the form of a flash loan.

1. Insert a ‘Flashloan’ cube in the amount you wish to increase your exposure by. Based on the above example, we will take a flash loan for 0.457ETH (or $800 value)

![](https://miro.medium.com/v2/resize:fit:1400/0*x9PnGH_9BMrvFyhq)

2. Next we will perform the same steps as mentioned above. Simply add the ‘Deposit’ cube under Aave, and make a deposit in the asset you wish to use as collateral, in this case we are using WETH (note: ETH should be wrapped ahead of time using the utility cube ‘WETH’). Ensure the cubes are above the bottom flash loan cube.

![](https://miro.medium.com/v2/resize:fit:1400/0*swyb-I1nRcildirp)

3. Now we will use a ‘Return Funds’ cube to add the aToken to the contract in order to borrow an asset in one transaction. In this example, we will add the aEthWETH token in our return funds cube. If you deposit a different asset, simply carry over the aToken and the amount into the return funds cube.

![](https://miro.medium.com/v2/resize:fit:1400/0*o3a7cpWGRQqgQeI5)

4. Now we can borrow a stable token from Aave. We will borrow USDC in this case, but you can choose any stable token that’s available on the lending protocol of your choice. Because we made a deposit of $800 in value, we can borrow up to approximately 80% of the value of that, which would be $640.

The other value will be made up from the extra debt we can take on from Aave, which will increase our loan-to-value ratio (thus increasing our liquidation risk, or our leverage to the market). In this example, we will borrow at least enough to pay back the flash loan. So we will borrow $850USDC, but how much you borrow will depend on your risk tolerance, collateralization ratio, etc.

![](https://miro.medium.com/v2/resize:fit:1400/0*38m2qZvB09Rx6RQ3)

5. Next we will swap the borrowed USDC to ETH to increase our leverage or exposure to the ETH asset.

![](https://miro.medium.com/v2/resize:fit:1400/0*KnuLa8Ec5U7QDyU2)

6. Once you are happy with the numbers, you can hit ‘approve’ & ‘send’ at the bottom of the page. You have now adjusted your leveraged position with a flash loan using Furucombo.

To learn more about our other position management features, click the following tutorials:

1. [Leveraged Short Position](https://medium.com/furucombo/leveraged-short-position-tutorial-7b0e3b4aec41)
2. [Collateral Swap](https://medium.com/furucombo/collateral-swap-tutorial-17d14aa5fc20)
3. [Debt Swap](https://medium.com/furucombo/debt-swap-tutorial-6cacb3e4e6b7)
4. D[e-Leverage Position](https://medium.com/furucombo/de-leverage-position-tutorial-7324c10a50d4)