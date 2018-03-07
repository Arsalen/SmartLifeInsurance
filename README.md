# Smart Life Insurance

# Problem setting 

“SLInsurance” is a Decentralized application introduced as an alternative of classic life risk management policies.
The flaws of such an approach are:

 -   High cost and long time processing caused by the presence of middleman in each step in the insurance request life cycle.
 -   Trust issue between both sides : On one hand agencies may profit from user’s data, on the other hand agencies don’t rely on client’s introduced informations.
 -   User’s data are spread through different actors of the insurance life cycle thus accuracy diminish from one to another. 

Our solution is introduced to recover these issues by building a BlockChain based application which delegates data access to a smart contract to prevent actors from manipulating each other’s informations, and abstract the process and visualisation.
Furthermore, our approach will remove the middleman involved and reduce costs and time for all actors.
Finally, accuracy is assured as all parties involved will deal with a unique version of records.


## Ecosystem

- Agencies: introduce their weights for each criterium (driving criteria, medical criteria).
- Clients: introduce his credentials (age, gender, work, nationality).
- Doctors: fill or validate anonymous user’s medical profil.
- Traffic agents: fill or validate anonymous user’s driving violation profil.


## **Set up instructions**
-   Install Npm and NodeJs.
    
-   You will need Remix (Online IDE and Solidity compiler). [remix.ethereum.org/](https://remix.ethereum.org/)
    
-   Install Testrpc (npm install -g ethereumjs-testrpc)
    
-   Install metamask PlugIn. [metamask.io/](https://metamask.io/)
    
-   Install IPFS. [ipfs.io/](https://ipfs.io/)
    
-   Install web3. (npm install web3).
    
-   jquery, HTML, CSS.

**Deployment instructions**

-   Run Testrpc
    
-   Import Metamask account from Testrpc accounts.
    
-   Link Metamask to localhost:8545 Network.
-   Compile and run Smart Contracts on Remix IDE.
    
-   Call contracts address from Web3js code.
    
-   Deploy the project directory into IPFS.
