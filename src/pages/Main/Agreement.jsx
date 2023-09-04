import React from "react";
import Footer from "../../components/Footer";
import MainNavBar from "../../components/MainNavBar";

const Agreement = () => {
  return (
    <>
      <MainNavBar />
      <main className="mainText">
        <h3> Client's Agreement </h3>
        <div className="mainTextParagraph">
          Client Agreement provides an individual with access to the trading
          platform thrida.com and the thrida mobile application for the purpose
          of the Client concluding trading operations using financial
          instruments provided by the Company. Unless otherwise specifically
          stated in this Agreement, all services provided by the Company through
          the Website are also provided through the Mobile Application.
          <ol>
            <li>
              <span className="highlightText">General Provisions</span>
              <ul>
                <li>
                  The Client accepts the Agreement by registering and creating
                  an Account on the Website. Acceptance of the Agreement means
                  full and unconditional agreement of the Client to its terms
                  and conditions.
                </li>

                <li>
                  The Privacy Policy published on the Website are essential
                  parts of this Agreement.
                </li>
              </ul>
            </li>

            <li>
              <span className="highlightText">Terminology</span>
              <ul>
                <li>
                  Account is the Client's account on the Website, necessary for
                  authentication and the provision of access to their Personal
                  Account.
                </li>
                <li>
                  Assets are the virtual indices, virtual stocks, virtual
                  commodities, and virtual currency pairs available for trading
                  using financial instruments provided by the Company.
                </li>
                <li>
                  Account Balance is the total amount of funds in the Client's
                  Account, excluding Open Trades. The amount of the Account
                  Balance is the amount of the Company's financial obligation to
                  the Client at a particular point in time unless otherwise
                  specified.
                </li>
                <li>
                  Copy pro's Trade is the opportunity you're given to copy a pro
                  trader's trade to make profits.
                </li>
                <li>
                  Bonuses, Bonus Funds are funds credited by the Company to the
                  Client's Account to increase their trading potential. Bonuses
                  are not a financial obligation of the Company to the Client.
                </li>
                <li>
                  Withdrawal of Funds is the debiting of monetary funds from the
                  Account and transfer thereof to the Client's account.
                </li>
                <li>
                  A Demo Account is a virtual learning and practicing account
                  for the Client on the Trading Platform, reflecting in real
                  time the results of their Trading Operations on that account.
                  The currency of the Demo Account always matches the currency
                  of the Client's Real Account. Demo Account funds are not a
                  financial obligation of the Company to the Client.
                </li>
                <li>
                  Deposit is monetary funds deposited by the Client in their
                  Account.
                </li>
                <li>
                  Closed Trade is a Trade in which the Expiration has been
                  reached, or a Trade closed by order of the Client.
                </li>
                <li>
                  Quote is the digital cost value of an Asset at a certain point
                  in time.
                </li>
                <li>
                  The Client’s Personal Account is a section of the Website with
                  restricted access through which the Client, having completed
                  the authorization procedure by entering their login and
                  password, is able to use the services of the Company.
                </li>
                <li>
                  Log File is a file containing system information about the
                  operation of the Company Server and information about the
                  Client’s actions on the Website.
                </li>
                <li>
                  Non-trading Operation is an operation involving making a
                  Deposit into the Account or Withdrawing Funds from the
                  Client's Account, as well as other operations that are not
                  considered Trading.
                </li>
                <li>
                  Trade Volume is the product of the Client's investment in a
                  Trade and the Multiplier assigned by them.
                </li>
                <li>
                  Open Trade is a Trade prior to its Expiration or a Trade prior
                  to its closing by order of the Client.
                </li>
                <li>
                  Payment System Provider/Payment gateway is a company that
                  provides online services for conducting electronic payments.
                </li>
                <li>
                  A Client’s Real Account (Client Account, Account) is a special
                  Client Account on the Trading Platform that reflects in real
                  time the results of their Non-trading Operations, Open and
                  Closed Trades, as well as other changes in the Company's
                  financial obligations to the Client. Possible Account
                  Currencies: US dollar, Naira.
                </li>
                <li>
                  Trade is opposite Trading Operations with the same
                  identification number.
                </li>
                <li>
                  The Company Server is a software and hardware complex that
                  provides streams of Quotes to the Client in real time and
                  processes the Client's Trading Orders.
                </li>
                <li>
                  Strike Price is the Asset Quote forecasted by the Client at
                  the close of the Trade.
                </li>
                <li>
                  Trading Activity is the Client’s actions involving making a
                  Deposit into their Account, Withdrawing Funds, concluding
                  Trading Operations, paid registration for a tournament,
                  crediting the balance of the Client’s tournament account
                  (re-buys), and activating Bonuses or gifts.
                </li>
                <li>
                  Trading Operation is an over-the-counter operation with an
                  Asset concluded between the Company and the Client in non-stop
                  mode.
                </li>
                <li>
                  Trading Platform is a computer system that is accessed through
                  the Client’s Personal Account and is used to display Quote
                  streams transmitted from the Company Server, to place the
                  Client’s Trading Orders, to reflect the results of their
                  execution, and to perform other actions related to the
                  execution of Trading Operations.
                </li>
                <li>
                  Trading Order is the Client's order to conclude a Trading
                  Operation on the conditions specified in that order.
                </li>
                <li>
                  Trading Mechanics are financial instrument derivatives of
                  Assets provided by the Company on the Trading Platform, the
                  usage of which does not result in the actual acquisition of
                  the Asset.
                </li>
                <li>
                  Trading Turnover is the sum of all the Client's investments in
                  Trades made by the Client since the last Deposit was made to
                  the Account.
                </li>
                <li>
                  A Tournament is a limited-time competition within the Trading
                  Platform with a monetary prize fund.
                </li>
                <li>
                  Expiration is the time of execution of a Trade upon reaching
                  the time of its closing.
                </li>
              </ul>
            </li>

            <li>
              <span className="highlightText">Trading Mechanics</span>
              The following Trading Mechanics are available to the Client:
              <ul>
                <li>"Standard"</li>

                <li>
                  When opening a Trade, the Client indicates the Asset, the
                  amount of the Client's investment in the Trade, the direction
                  of chart movement, and the time of closing of the Trade.
                </li>

                <li>
                  The Trade closes upon reaching the selected closing time.
                </li>

                <li>
                  If at the moment of closing of the Trade, the current Quote of
                  the selected Asset is higher than its Quote at the moment of
                  the opening of the Trade, the Trade is considered profitable
                  if the selected direction of chart movement is "up." If at the
                  moment of closing of the Trade, the current Quote of the
                  selected Asset is lower than its Quote at the moment of the
                  opening of the Trade, the Trade is considered profitable if
                  the selected direction of chart movement is "down."
                </li>

                <li>
                  The Profitability of a Trade is fixed and dependent on the
                  selected amount of the Client's investment in the Trade, the
                  Asset, and the time of execution of the Trade. Earnings on a
                  Trade are defined as the percentage of profitability
                  multiplied by the amount of the Client's investment in the
                  Trade.
                </li>

                <li>
                  When opening a Trade, the Client indicates the Asset, the
                  amount of the Client's investment in the Trade, the direction
                  of chart movement, the Strike Price, and the time of closing
                  of the Trade.
                </li>

                <li>
                  The Trade is closed upon reaching the selected closing time.
                </li>

                <li>
                  If at the time of closing of the Trade, the current Quote of
                  the selected Asset is higher than the Strike Price specified
                  by the Client, the Trade is considered profitable if the
                  selected direction of chart movement is “up.” If at the time
                  of closing of the Trade, the current Quote of the selected
                  Asset is lower than the Strike Price specified by the Client,
                  the Trade is considered profitable if the selected direction
                  of chart movement is "down."
                </li>

                <li>
                  The Profitability of a Trade is fixed and dependent on the
                  selected amount of the Client's investment in the Trade, the
                  Asset, the Strike Price, the direction of chart movement, and
                  the time of execution of the Trade. Earnings on a Trade are
                  defined as the percentage of profitability multiplied by the
                  amount of the Trade.
                </li>

                <li>
                  A Trade can be closed ahead of schedule. The early execution
                  price is calculated dynamically and updated depending on
                  market conditions.
                </li>

                <li>
                  When opening a Trade, the Client indicates the Asset, the
                  amount of the Client's investment in the Trade, the
                  Multiplier, and the direction of chart movement.
                </li>

                <li>
                  Copy pro's trading period: Monday 07:00 to Friday 23:59 .Every
                  pro trader collects commission based on their terms as a
                  reward if the trade is successful, the amount is deducted from
                  the amount you won from the trade and sent to the pro trader's
                  account immediately after the trade and remember this only
                  applies if the trade was successful, the commission a pro
                  trader got from traders that copied the successful trade is
                  sent as a bonus then the pro trader is then meant to click on
                  get commission on the bonus page in other to add the funds to
                  the account balance. Remember, Thrida is not to be hold
                  responsible if you copied a pro trader's trade but the trade
                  was unsuccessful, but we still make provisions for a user to
                  see lost and successful trades in the pro trader's profile.
                </li>

                <li>
                  At the time of opening a Trade, a commission in the amount of
                  0.02% of the Trade Volume is debited from the Client's Demo
                  Account. When calculating the amount of the commission, it is
                  always rounded up to the nearest tenth in the Demo Account
                  currency.
                </li>

                <li>
                  The Trade is closed by order of the Client or automatically.
                </li>
              </ul>
            </li>

            <li>
              <span className="highlightText">
                Registration and Verification of the Client
              </span>
              <ul>
                <li>The registration procedure is mandatory for the Client.</li>
                <li>
                  To register on the Website, the Client must perform the
                  following actions:
                  <ul>
                    <li>enter their email address and create a password;</li>
                    <li>select the currency of the Account;</li>
                    <li>accept the terms and conditions of this Agreement.</li>
                  </ul>
                </li>
                <li>
                  By accepting the terms of this Agreement, the Client
                  guarantees the following:
                  <ul>
                    <li>that they are a legally capable adult;</li>

                    <li>
                      that they have read the terms of this Agreement and agree
                      to them.
                    </li>
                  </ul>
                </li>
                <li>
                  In order to ensure the legality and security of the provision
                  of services, the Company conducts a procedure for verifying
                  the identity of the Client and the information indicated by
                  them (verification). In doing this, the Company has the right
                  to request that the Client provide a photograph of:
                  <ul>
                    <li>
                      the spread (page) of the Client's passport with his or her
                      photograph and personal data; or
                    </li>

                    <li>the front and back of the Client's ID card; or</li>

                    <li>the Client's driver's license.</li>
                  </ul>
                  The Company also has the right to request the Client’s current
                  utility bills showing the opening of their account and other
                  documents if the documents provided to them earlier do not
                  allow the Client to be fully identified and/or verify his
                  payment details and confirm the information specified by them.
                </li>
                <li>
                  Verification is carried out within 24 (hours)from the moment
                  the Client provides the full set of documents requested by the
                  Company. In some cases, the Company has the right to extend
                  this period to 7 (Seven) calendar days.
                </li>
                <li>
                  If the Client unjustifiably refuses to provide the documents
                  and/or information requested for verification, the Company has
                  the right to suspend the servicing of their Account and Real
                  Account with subsequent blocking. The Company may return any
                  funds deposited by the Client concerned only by using payment
                  details provided during registration or may withhold such
                  funds until the Client completes verification.
                </li>
                <li>
                  To confirm the identity of the Client and verify the documents
                  provided by them, the Company has the right to request a face
                  card this requires you taking a face selfie or we might
                  require a live photo shoot.
                </li>
                <li>
                  By registering on the Website, the Client consents to
                  receiving emails from the Company, including advertising
                  messages, as well as phone calls and SMS texts. If the Client
                  does not want to receive information from the Company by
                  email, they may at any time cancel their subscription by
                  clicking on the "Unsubscribe" link in any email from the
                  Company, by deactivating the corresponding option in their
                  Personal Account, or by contacting the Company's Support
                  Service. The Client may unsubscribe from calls and text
                  messages from the Company at any time by contacting the
                  Company's Support Service. The Company undertakes to
                  immediately respond to the Client’s request to cancel their
                  subscription to all types of emails (except for transactional
                  notifications), as well as not to receive calls or SMS texts.
                </li>
                <li>
                  The Client has the right to register only 1 (One) Account on
                  the Website. If the Company discovers several Accounts
                  belonging to the same Client or group of persons, if such
                  persons have the opportunity to log in from the same IP
                  address or access the Website from the same device, or with
                  authorization from the same IP address or upon the detection
                  of other signs of the possession of multiple Accounts, the
                  Trades and their financial outcomes on all such Accounts may
                  be held for some time, and the Accounts may be blocked for
                  some time. In this case, the funds held in those Accounts
                  cannot be considered a financial liability of the Company to
                  the Client. The Company may ask the Client to identify the
                  main Account that the Client wishes to keep. In this event,
                  Deposit funds that the Client has added to other Accounts will
                  be returned by using payment details provided during the
                  registration of such Accounts without (any compensation for)
                  any profits and/or losses.
                </li>
              </ul>
            </li>

            <li>
              <span className="highlightText">
                Procedure for Conducting Non-trading Operations
              </span>
              <ul>
                <li>
                  The official methods of Account crediting and Withdrawal of
                  Funds are the methods indicated on the Company's Website. The
                  Client assumes all the risks associated with the use of
                  payment systems, as well as payment of commissions of payment
                  systems and/or payment system Providers for making payments
                  and/or currency conversion, the Company has the right to
                  charge a deposit and/or withdrawal fee. Thrida is not
                  responsible for the delay or failure to make a payment from
                  the Account or to the Client's Account due to the fault of the
                  payment system and/or the payment system Provider. In the case
                  of claims regarding the operation of any payment system and/
                  payment system Provider on the part of the Client, they should
                  contact the support service of that payment system and/or
                  Provider accordingly. The Client is obliged to notify thrida
                  of any cases of such complaints.
                </li>
                <li>
                  To fund your account, the Client can use any of the payment in
                  the Website. The minimum Deposit amount is $1 or an equivalent
                  of $1 (depending on the dollar rate of the country). At the
                  discretion of the Company, the minimum Deposit amount may be
                  reduced or increased. The exact amount of the minimum Deposit
                  is displayed in the deposit section in the Client’s Personal
                  Account on the Website when crediting their Account. The
                  company has the right to charge deposit fee (1% - 10% of
                  deposit made)
                </li>
                <li>
                  In the event that signs of fraud are detected in the
                  conducting of financial transactions after the crediting of
                  funds to the Client’s Account, the Company reserves the right
                  to cancel such transactions and block the Client’s Account.
                </li>

                <li>
                  After the creation of the withdrawal request, the amount of
                  funds to be withdrawn is debited from the Client's Account
                  then exact amount requested to the withdrawn is sent to the
                  payment system the client provided, payment can take up to 1-
                  3 working days, Withdrawals can only be made on working days.
                  Payments made at the request of the Client can be reversed by
                  cancellation of the withdrawal request in the transaction
                  page.The following limits apply to the Withdrawal of funds on
                  the Site: Minimum withdrawal of $1, Maximum withdrawal -
                  Unlimited. Payment can be sent to any account details the
                  client provided. That is to say that a client is meant to
                  provide all account details requested by the company. The
                  company has the right to charge withdrawal fee (1% - 10% of
                  the withdrawal made).
                </li>

                <li>
                  If the Client clearly intends to use their Account for
                  exchange transactions between payment systems, the Company has
                  the right to decline the Client's request for Withdrawal of
                  Funds from their Account.
                </li>

                <li>
                  The Client is solely responsible for the accuracy and
                  reliability of the data entered in their Withdrawal request.
                </li>
                <li>
                  In the event of technical errors on the part of the Company
                  when completing financial transactions, the Company reserves
                  the right to cancel such transactions, as well as the results
                  of services provided by the Company based on such
                  transactions. The Funds debited as a result from the Account
                  of the Client will be refunded by the Company to the Account
                  of the Client when and if an internal investigation reveals
                  any technical errors and the Company has access to such funds.
                </li>

                <li>
                  In cases where the Company's Security Service suspects the
                  Client of fraud or deception, the Company has the right to
                  block the Client's Account without prior notice and without
                  the possibility of Account crediting and Withdrawing Funds for
                  the period up to months. Upon results of the Company's
                  Security Service investigation, Company has the right to block
                  the Client's Account permanently and deduct the amount of
                  actual damage caused by the actions of the Client to the
                  Company, as well as the profits that the Client received as a
                  result of the fraud or deception, from the Client's Account.
                </li>
              </ul>
            </li>

            <li>
              <span className="highlightText">
                Procedure for Conducting Trading Operations
              </span>

              <ul>
                <li>
                  The processing time of a Client's Trading Order depends on the
                  quality of communication between the Trading Platform and the
                  Server, as well as on the market conditions. Under normal
                  market conditions, the processing time of a Client’s Trading
                  Order is usually 0-4 seconds. Under market conditions other
                  than normal, the processing time of a Client’s Trading Order
                  may be extended.
                </li>
                <li>Opening Trades</li>
                <li>
                  The minimum amount of Client investment in one Trade on the
                  Trading Platform is $1 or an amount equivalent to $1
                  (depending on the Account currency);
                </li>
                <li>
                  A Client’s Trading Order to open a Trade will be rejected for
                  the following reasons:
                </li>
                <ul>
                  <li>
                    the Client submits the Trading Order before the first quote
                    of the Trade Asset is received on the Trading Platform at
                    the opening of the market;
                  </li>

                  <li>
                    There are not enough available funds in the Client’s Account
                    to open a new Trade.
                  </li>
                </ul>
                <li>
                  A Client’s Trading Order to open a Trade may also be rejected
                  by the Server under market conditions other than normal.
                </li>
                <li>
                  A Client’s Trading Order to open a Trade is considered
                  executed, and the Trade open, after a corresponding record
                  appears in the Log File. Each Trade on the Server is assigned
                  a unique identification number.
                </li>
                <li>Closing Trades</li>
                <li>
                  The closing of the Trade occurs at the current Quotation of
                  the Trade Asset that is on the Server at the time of the
                  closing of the Trade.
                </li>
                <li>
                  A Client’s Trading Order to close a Trade is considered
                  completed, and the Trade closed, after a corresponding record
                  appears in the Log File.
                </li>
                <li>
                  The Company has the right to limit the maximum number of
                  Trades made by a Client in one minute, hour, or calendar day.
                </li>
                <li>
                  The Company has the right to change the percentage of
                  profitability, the size of the minimum and maximum amounts of
                  Client investment in one Trade, as well as the Expiration
                  periods for one, multiple, or all Assets.
                </li>
                <li>
                  Malfunctions and/or failures in the operation of computer
                  equipment and software of the Company, unstable Internet
                  connections, interruptions in the transmission of information
                  streams, interruptions in power supply, malfunctions in the
                  operation of exchanges, hacker attacks, as well as any illegal
                  actions in regard to equipment and/or the Company Server,
                  force majeure circumstances, and the suspension of trading on
                  financial markets, which affect the Assets available on the
                  Website are direct grounds for the invalidation of Trades
                  executed under those circumstances.
                </li>
              </ul>
            </li>

            <li>
              <span className="highlightText">
                Bonuses and gifts, and participation in tournaments and
                promotions
              </span>

              <ul>
                <li>
                  Bonuses are credited to the Client's Account in accordance
                  with bonus or promotional programs conducted by the Company.
                </li>
                <li>
                  The amount of a Bonus depends on the conditions of the
                  promotion or program for which it was credited (non-deposit
                  Bonuses), and/or the size of the Client's Deposit (deposit
                  Bonuses).
                </li>
                <li>
                  Bonuses credited to the Account are not a financial obligation
                  of the Company to the Client.
                </li>
                <li>
                  Within the framework of a single promotion, the Client is
                  entitled to receive Bonus funds only once, unless otherwise
                  specified in the conditions of the promotion.
                </li>
                <li>
                  The profit received by the Client for Trades using Bonuses may
                  have limitations on the amount of Withdrawal.
                </li>
                <li>
                  Gift non-deposit Bonuses must be activated in the Client’s
                  Personal Account within 3 (Three) days from the moment they
                  are credited.
                </li>
                <li>
                  After a Bonus is activated, the Client has the right to cancel
                  it by contacting the Company's Client Support Service using
                  the contacts specified in section 12 of this Agreement.
                  Declining or canceling a Bonus is possible only if the Client
                  has completed no Trading Operations since the Bonuses were
                  credited.
                </li>
                <li>
                  Upon the expiration of a promotion, the Bonus credited
                  according to that promotion may be debited from the Client's
                  Account.
                </li>
                <li>
                  Participation in Tournaments. The Client uses a special
                  tournament account to participate in Tournaments. Trades in a
                  Tournament are made in virtual currency (₹). All participants
                  have the same starting tournament balance at the start of the
                  Tournament. The main goal of the participants is to have the
                  highest tournament balance by the time the Tournament ends.
                  The prize fund is distributed among the winners who have won
                  prize places. Detailed conditions for participation in
                  Tournaments can be found on the pages corresponding to those
                  Tournaments on the Company's Website.
                </li>
                <li>
                  The Client has the right to participate in all available
                  Tournaments and promotions held by the Company. Clients must
                  independently familiarize themselves with the conditions of
                  such Tournaments and promotions posted on the Company's
                  Website. Client also have the right to host a tournament but
                  will be reviewed by the admin the tournament the client wants
                  to host is found worthy and interesting it will be approved
                  then the client will then proceed with deposition of prize
                  funds for the winners, After the tournament is over the profit
                  made by the host will be shared with the ratio 50:50 and Also
                  if no profit is made from the tournament or the capital used
                  to host the tournament is not recovered the company is not to
                  be hold responsible for the loss.
                </li>
                <li>
                  The monetary funds received by the Client from the Company as
                  a prize for participation in a Tournament are credited to
                  their real Account after the prize is activated in the
                  Client’s Personal Account, unless otherwise specified in the
                  tournament conditions.
                </li>
                <li>
                  If the Security Service of the Company suspects a Client of
                  fraudulent actions in order to win a Tournament or promotion,
                  the Company has the right to review or rescind the Client’s
                  results in that Tournament or promotion, and also to ban them
                  from participating in subsequent Tournaments and/or
                  promotions. In the event that the fact of fraud is confirmed,
                  the results of the Client in that Tournament or promotion are
                  rescinded.
                </li>
                <li>
                  As part of promotions or special programs, the Company may
                  provide additional gifts to the Client. Types and the amount
                  of such gifts depend on the conditions of the promotion or
                  program.
                </li>
              </ul>
            </li>
            <li>
              <span className="highlightText">Client risks</span>
              <ul>
                <li>The Client fully acknowledges the following:</li>
                <ul>
                  -
                  <li>
                    the conducting of trading operations with financial
                    instruments is accompanied by significant risks. Before
                    using the Company's services, the Client needs to analyze
                    their financial capabilities;
                  </li>
                  -
                  <li>
                    the Trading Operations they carry out through the Trading
                    Platform are not Trades concluded on an official exchange.
                    They are over the counter, and therefore carry a greater
                    risk for the Client than official exchange Trades;
                  </li>
                  -
                  <li>
                    any information and/or recommendations they receive on the
                    Website from representatives or partners of the Company are
                    not considered a direct offer to conduct a Trading Operation
                    or a financial transaction;
                  </li>
                  -
                  <li>
                    they may incur financial losses as a result of malfunctions
                    and/or failures in the operation of computer equipment,
                    software, an unstable internet connection, power outages, or
                    other technical factors;
                  </li>
                  -
                  <li>
                    in market conditions other than normal, the processing time
                    of their Trading Orders may be extended, as a result of
                    which the Client may incur losses. In addition, sharp
                    fluctuations in Quotes may result in Client losses when a
                    Trade is executed at a Quote Price that is different from
                    the Quote Price displayed on the Trading Platform.
                  </li>
                </ul>
                <li>
                  In some countries, use of the Company's services may be
                  restricted or prohibited by law. The Client assumes all risks
                  associated with analysis of the legislation of their country,
                  or their country of residence, for such restrictions or
                  prohibitions, as well as responsibility for using the services
                  of the Company in countries where they are restricted or
                  prohibited.
                </li>
                <li>
                  The Client acknowledges that the Company does not guarantee
                  receipt by the Client of profit in any amount or the absence
                  of losses in the course of the Client using the services.
                </li>
              </ul>
            </li>

            <li>
              <span className="highlightText">
                Complaints and dispute resolution
              </span>
              <ul>
                <li>
                  In the event of a dispute, the Client first must contact the
                  Company's Client Support Service using the contacts. If the
                  Client deems the answer given by the Support Service to be
                  unsatisfactory or the Support Service does not have the
                  authority to resolve the question raised by the Client, the
                  Client has the right to contact the Support Service with a
                  request to forward the question to the Company’s Dispute
                  Resolutions Department or to send the complaint via email to
                  support@thrida.com.
                </li>

                <li>
                  When submitting a complaint, the Client must indicate the
                  following information:
                  <ul>
                    <li>the Client's first and last name;</li>

                    <li>the Client's email address;</li>

                    <li>
                      when (date) and which operations were involved when the
                      dispute arose or was detected;
                    </li>

                    <li>a detailed description of the situation;</li>

                    <li>attached files confirming the dispute (if any).</li>
                  </ul>
                  In order for the dispute to be resolved as soon as possible,
                  the Client must provide all the above information in full.
                </li>

                <li>
                  In the event of non-compliance of the complaint with the
                  requirements set out in clauses 11.1 and 11.2 of this
                  Agreement, and/or if any of the following conditions exist,
                  <ul>
                    <li>
                      in the complaint, the Client makes provocative statements,
                      unfounded accusations, or threats of “denigrating” the
                      business image of the Company;
                    </li>

                    <li>
                      the received message contains threats, insults, or
                      vocabulary of an obscene nature aimed at the Company
                      and/or its employees;
                    </li>
                  </ul>
                  Consideration of the Client's complaint may be rejected. The
                  Company recognizes such actions as unacceptable and has the
                  right to appeal against them to the competent authorities.
                </li>
                <li>
                  When considering a Client's complaint, the Company is always
                  guided by their interests and is obliged to give a preliminary
                  response within 3 (Three) business days from the day the
                  complaint is received, containing the following information:
                  <ul>
                    <li>
                      confirmation of receipt of the complaint by the Dispute
                      Resolution Department;
                    </li>

                    <li>
                      preliminary results of the audit or information that may
                      be relevant to the subject of the complaint;
                    </li>

                    <li>
                      a deadline for making a decision regarding the complaint.
                    </li>
                  </ul>
                </li>

                <li>
                  Within 10 (Ten) business days from the day following the date
                  of the complaint, the Company provides the Client with an
                  answer about the measures taken to resolve the dispute, as
                  well as recommendations for further actions by the Client. If
                  the Company needs to obtain additional information to settle
                  the dispute, it is entitled to extend the time for
                  consideration of the complaint, but for no more than 10 (Ten)
                  business days, and it is obliged to notify the Client.
                </li>

                <li>
                  Complaints about the recovery of lost profits and/or
                  compensation for moral damage by the Company are not accepted
                  for consideration.
                </li>

                <li>
                  A dispute is deemed to be settled if within 5 (Five) business
                  days from the moment a response is sent to the Client, the
                  answer is not appealed by them.
                </li>
              </ul>
            </li>
            <li>
              <span className="highlightText">Contacts</span>
              <ul>
                <li>
                  To contact the Company, the Client may use the method below to
                  reach out to us: - to the email address:support@thrida.com;
                </li>

                <li>
                  The Client’s contacts are their email address, indicated when
                  registering on the Website, as well as the phone number
                  indicated in their Personal Account on the Company Website if
                  the Client wishes to indicate it.
                </li>

                <li>
                  The Company is not responsible for incorrect indication by the
                  Client of their contact information on the Website.
                </li>
              </ul>
            </li>

            <li>
              <span className="highlightText">
                Validity, amendment, and termination of this Agreement
              </span>
              <ul>
                <li>
                  This Agreement becomes legally binding at the time of the
                  Client’s registration on the Website.
                </li>

                <li>
                  The obligations and rights of the Client and the Company
                  established by this Agreement are considered a long-term act
                  and are valid until the termination of the Agreement.
                </li>

                <li>
                  The Company has the discretion at any time to make amendments
                  to this Agreement. If amendments are made to the Agreement,
                  they will come into force from the moment the amended text of
                  the Agreement is posted on the Website at thrida.com, unless a
                  different term for is specified for the amendments to come
                  into force. The Client is obliged to independently familiarize
                  themselves with the current version of the Agreement posted on
                  the Site.
                </li>

                <li>
                  If the Client does not agree to the amended version of the
                  Agreement, they must stop using the Company's services and
                  block their Account via the Personal Account interface on the
                  Website or by contacting the Company's Client Support Service
                  using the contacts email.
                </li>

                <li>
                  This Agreement may be terminated as follows:
                  <ul>
                    <li>at the initiative of any Party;</li>

                    <li>
                      in the case of death of the Client or recognition of their
                      legal incapacity;
                    </li>

                    <li> in the case of liquidation of the Company.</li>
                  </ul>
                </li>

                <li>
                  Regardless of the basis for termination of the Agreement, the
                  Company undertakes to fulfill its obligations to the Client in
                  the manner provided for in this Agreement.
                </li>

                <li>
                  The Client has the right to terminate this Agreement at any
                  time, regardless of their motives.
                </li>

                <li>
                  To terminate this Agreement unilaterally, the Client must
                  block their Account via the Personal Account interface on the
                  Website or by contacting the Company's Client Support Service
                  using the contacts email, after first making a Withdrawal of
                  Funds from their Account. If the Client fails to Withdraw
                  their Funds independently, the Company may transfer the
                  balance of the Account by using payment details provided by
                  the Client during registration.
                </li>

                <li>
                  If at the request of the Client, the Company removes the block
                  on their Account, this Agreement resumes its effect according
                  to the version valid at the time of the unblocking.
                </li>

                <li>
                  The Company has the right to terminate this Agreement
                  unilaterally without providing reasons.
                </li>

                <li>
                  In the event of termination of its activities, the Company is
                  obliged to notify the Client about this no later than 1 (One)
                  calendar month prior to the termination of its activities.
                </li>
                <li>
                  In the event of termination of its activities, the Company is
                  obliged to pay the Client the funds in their Account at the
                  time of the termination of the Company's activities, in full.
                </li>
              </ul>
            </li>
            <li>
              <span className="highlightText">Final provisions</span>
              <ul>
                <li>
                  The Client does not have the right to fully or partially
                  transfer their rights and obligations under this Agreement to
                  a third party.
                </li>
                <li>
                  In the case of a discrepancy between the text of this
                  Agreement in English and the text in other languages, the
                  version of the Agreement in English shall prevail.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Agreement;
