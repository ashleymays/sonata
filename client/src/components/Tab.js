import { useState } from "react";
import images from '../../public/images';

const dummyRecordings = [
    {
        id: 1,
        title: 'something.mp3',
        url: 'akjdsnflakjsdfka'
    },
    {
        id: 2,
        title: 'here.mp3',
        url: 'aksjdbflqoiwvofqh'
    },
    {
        id: 3,
        title: 'again.mp3',
        url: 'ygrbflkhdbfvkjs'
    },
    {
        id: 4,
        title: 'wish.mp3',
        url: 'laehgb'
    },
    {
        id: 5,
        title: 'i.mp3',
        url: 'lvhjbeog'
    },
    {
        id: 6,
        title: 'could.mp3',
        url: 'i3urbgkjdfnvsdkfnv'
    },
    {
        id: 7,
        title: 'run.mp3',
        url: 'wlhnvwov'
    },
    {
        id: 8,
        title: 'away.mp3',
        url: 'iwjenrvpwuev'
    },
    {
        id: 9,
        title: 'for.mp3',
        url: 'ieuvqop3ruv'
    },
    {
        id: 10,
        title: 'good.mp3',
        url: 'liefhbvqlebvioquebfv'
    }
]

const instruments = [
    {
        title: 'Acoustic Grand',
        icon: 'lkjdnvqoeurvq'
    },
    {
        title: 'Electric Piano',
        icon: 'alkjdflkhebv'
    },
    {
        title: 'Music Box',
        icon: 'ienuvqnerviqenv'
    },
    {
        title: '8-Bit',
        icon: 'eqifbuqleinlqkjwn'
    }
]

const tabs = [
    {
        id: 'Instruments',
        content: instruments, 
    },
    {
        id: 'Recordings',
        content: dummyRecordings
    }
];

function TabTitle(props) {
    const setCurrentTab = props.setCurrentTab;
    const title = props.title;
    const currentTab = props.currentTab;

    return (
        <h1 className={currentTab === title ? "flex flex-column tab-title active-tab" : "flex flex-column tab-title"} onClick={() => setCurrentTab(title)}>
            {title}
        </h1>
    )
}

function Tab() {
    const [currentTab, setCurrentTab] = useState('Instruments');

    const contentArray = tabs.find(tabTitle => currentTab === tabTitle.id).content;

    // for each option, assign 'content' variable to React elements
    let contentElements = contentArray.map(item => 
        <h1 className="tab-content" key={item.title}>
            {item.title}
        </h1>
    )

    console.log(images)

    return (
        <>
            <div className="tab-titles">
                <TabTitle title="Instruments" currentTab={currentTab} setCurrentTab={setCurrentTab} />
                <TabTitle title="Recordings" currentTab={currentTab} setCurrentTab={setCurrentTab} />
            </div>
            <div className="tab-contents">{contentElements}</div>
        </>
    )
}

export default Tab;