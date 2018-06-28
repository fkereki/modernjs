import React from "react";
import { storiesOf } from "@storybook/react";

import { ExpandableCard } from "./";

storiesOf("Expandable Card", module)
    .add("with normal contents", () => (
        <ExpandableCard key={229} title={"Normal"}>
            <div>CITIES: 12</div>
            <div>POPULATION: 41956</div>
        </ExpandableCard>
    ))

    .add("with many lines of content", () => (
        <ExpandableCard key={229} title={"Long contents"}>
            Many, many lines<br />
            Many, many lines<br />
            Many, many lines<br />
            Many, many lines<br />
            Many, many lines<br />
            Many, many lines<br />
            Many, many lines<br />
            Many, many lines<br />
            Many, many lines<br />
            Many, many lines<br />
            Many, many lines<br />
            Many, many lines<br />
            Many, many lines<br />
            Many, many lines<br />
        </ExpandableCard>
    ))

    .add("with expandable cards inside", () => (
        <ExpandableCard key={229} title={"Out card"}>
            <ExpandableCard key={1} title={"First internal"}>
                A single 1
            </ExpandableCard>
            <ExpandableCard key={2} title={"Second internal"}>
                Some twos
            </ExpandableCard>
            <ExpandableCard key={3} title={"Third internal"}>
                Three threes: 333
            </ExpandableCard>
        </ExpandableCard>
    ));
