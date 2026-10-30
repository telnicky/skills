# Lesson patterns

Use these as calibration examples. Choose fresh details appropriate to the learner and verify topic-specific facts when preparing a lesson. Treat code and outcomes below as illustrative unless executed.

## Pick a running example

| Topic | Running example | Possible cumulative journey |
|---|---|---|
| Stateful serverless computing | A counter shared by two browser tabs | Answer a request; expose separate memory; introduce a named owner; save state; create separate rooms; broadcast changes |
| Caching | A small product catalog | Read a value; save a copy; change the source; observe stale data; choose when to refresh |
| Proportional relationships | A lemonade stand charging two dollars per cup | Price one cup; scale a table; find a constant ratio; write an equation; add a fixed delivery fee and test what changed |
| Basic statistics | One small set of delivery times | Find a typical value; add one late delivery; compare mean and median; describe spread |
| Photography | The same tabletop still life | Fix the scene; change one camera setting; compare exposure or depth of field; account for a tradeoff |
| Prioritization | One short project backlog | Choose a goal; compare tasks against it; introduce a dependency; make an explicit tradeoff |

Keep these as candidate sequences, not mandatory episode lists. Some topics are best taught by adding evidence rather than changing an implementation. In interpretive topics, distinguish the source, an inference, and an invented scenario.

## Calibrate a coding episode

### Episode: Notice when a cached answer gets stale

**Goal:** See why a cache needs a freshness rule.

Suppose this toy Python example reads a product price. The cache starts empty, and the original price is 20:

```python
catalog = {"mug": 20}
cache = {}

def price(item):
    if item not in cache:
        cache[item] = catalog[item]
    return cache[item]
```

Now change the source after the first read:

```python
price("mug")          # Expected: 20; fills the cache.
catalog["mug"] = 25
price("mug")          # Expected: still 20.
```

**Expected result:** The source says 25 while the cached answer remains 20.

**What you learned:** A saved copy can become stale. The next episode should add a specific freshness rule and demonstrate what it changes.

Do not claim this tiny example proves a speed improvement; no performance measurement was made.

## Calibrate a noncoding episode

### Episode: Add a fixed delivery fee

**Goal:** Test whether the price still scales directly with the number of cups.

The same lemonade stand charges two dollars per cup. Earlier, one cup cost 2 dollars and three cups cost 6 dollars. Now add a one-dollar delivery fee to each order:

| Cups | Drink cost | Delivered total |
|---:|---:|---:|
| 1 | 2 dollars | 3 dollars |
| 3 | 6 dollars | 7 dollars |

**Small change:** Add the fee once per order, not once per cup.

**What you observe:** Tripling the cups changes the total from 3 to 7 dollars, rather than tripling it to 9 dollars.

**What you learned:** A fixed fee breaks proportionality between cup count and total cost. The new relationship is `total = 2 × cups + 1`.

Keep this episode about proportionality. Defer taxation, profit, pricing strategy, and other questions until requested.
