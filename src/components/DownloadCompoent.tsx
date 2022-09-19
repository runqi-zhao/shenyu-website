import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import styles from './DownloadCompoent.module.css';

const data = [
    {
        title: translate({ message: 'Source Codes' }),
        versions: [
            {
                versionTitle: '2.5.0',
                targets: {
                    'zip': 'https://www.apache.org/dyn/closer.lua/shenyu/2.5.0/apache-shenyu-2.5.0-src.zip',
                    'asc': 'https://downloads.apache.org/shenyu/2.5.0/apache-shenyu-2.5.0-src.zip.asc',
                    'sha512': 'https://downloads.apache.org/shenyu/2.5.0/apache-shenyu-2.5.0-src.zip.sha512',
                }
            },
            {
                versionTitle: '2.4.3',
                targets: {
                    'zip': 'https://archive.apache.org/dist/shenyu/2.4.3/apache-shenyu-incubating-2.4.3-src.zip',
                    'asc': 'https://archive.apache.org/dist/shenyu/2.4.3/apache-shenyu-incubating-2.4.3-src.zip.asc',
                    'sha512': 'https://archive.apache.org/dist/shenyu/2.4.3/apache-shenyu-incubating-2.4.3-src.zip.sha512',
                }
            },
            {
                versionTitle: '2.4.2',
                targets: {
                    'zip': 'https://archive.apache.org/dist/shenyu/2.4.2/apache-shenyu-incubating-2.4.2-src.zip',
                    'asc': 'https://archive.apache.org/dist/shenyu/2.4.2/apache-shenyu-incubating-2.4.2-src.zip.asc',
                    'sha512': 'https://archive.apache.org/dist/shenyu/2.4.2/apache-shenyu-incubating-2.4.2-src.zip.sha512',
                }
            }
        ],
    },
    {
        title: translate({ message: 'ShenYu-Admin Binary Distribution' }), 
        versions: [
            {
                versionTitle: '2.5.0',
                targets: {
                    'tar': 'https://www.apache.org/dyn/closer.lua/shenyu/2.5.0/apache-shenyu-2.5.0-admin-bin.tar.gz',
                    'asc': 'https://downloads.apache.org/shenyu/2.5.0/apache-shenyu-2.5.0-admin-bin.tar.gz.asc',
                    'sha512': 'https://downloads.apache.org/shenyu/2.5.0/apache-shenyu-2.5.0-admin-bin.tar.gz.sha512',
                }
            },
            {
                versionTitle: '2.4.3',
                targets: {
                    'tar': 'https://archive.apache.org/dist/shenyu/2.4.3/apache-shenyu-incubating-2.4.3-admin-bin.tar.gz',
                    'asc': 'https://archive.apache.org/dist/shenyu/2.4.3/apache-shenyu-incubating-2.4.3-admin-bin.tar.gz.asc',
                    'sha512': 'https://archive.apache.org/dist/shenyu/2.4.3/apache-shenyu-incubating-2.4.3-admin-bin.tar.gz.sha512',
                }
            },
            {
                versionTitle: '2.4.2',
                targets: {
                    'tar': 'https://archive.apache.org/dist/shenyu/2.4.2/apache-shenyu-incubating-2.4.2-admin-bin.tar.gz',
                    'asc': 'https://archive.apache.org/dist/shenyu/2.4.2/apache-shenyu-incubating-2.4.2-admin-bin.tar.gz.asc',
                    'sha512': 'https://archive.apache.org/dist/shenyu/2.4.2/apache-shenyu-incubating-2.4.2-admin-bin.tar.gz.sha512',
                }
            }
        ],
    },
    {
        title: translate({ message: 'ShenYu-Bootstrap Binary Distribution' }), 
        versions: [
            {
                versionTitle: '2.5.0',
                targets: {
                    'tar': 'https://www.apache.org/dyn/closer.lua/shenyu/2.5.0/apache-shenyu-2.5.0-bootstrap-bin.tar.gz',
                    'asc': 'https://downloads.apache.org/shenyu/2.5.0/apache-shenyu-2.5.0-bootstrap-bin.tar.gz.asc',
                    'sha512': 'https://downloads.apache.org/shenyu/2.5.0/apache-shenyu-2.5.0-bootstrap-bin.tar.gz.sha512',
                }
            },
            {
                versionTitle: '2.4.3',
                targets: {
                    'tar': 'https://archive.apache.org/dist/shenyu/2.4.3/apache-shenyu-incubating-2.4.3-bootstrap-bin.tar.gz',
                    'asc': 'https://archive.apache.org/dist/shenyu/2.4.3/apache-shenyu-incubating-2.4.3-bootstrap-bin.tar.gz.asc',
                    'sha512': 'https://archive.apache.org/dist/shenyu/2.4.3/apache-shenyu-incubating-2.4.3-bootstrap-bin.tar.gz.sha512',
                }
            },
            {
                versionTitle: '2.4.2',
                targets: {
                    'tar': 'https://archive.apache.org/dist/shenyu/2.4.2/apache-shenyu-incubating-2.4.2-bootstrap-bin.tar.gz',
                    'asc': 'https://archive.apache.org/dist/shenyu/2.4.2/apache-shenyu-incubating-2.4.2-bootstrap-bin.tar.gz.asc',
                    'sha512': 'https://archive.apache.org/dist/shenyu/2.4.2/apache-shenyu-incubating-2.4.2-bootstrap-bin.tar.gz.sha512',
                }
            }
        ],
    }
]

function DownloadCompoent() {
    const [showItem, setShowItem] = useState([false, false, false]);

    const closeList = useCallback((e)=>{
        const {target} = e;
        const value = target.getAttributeNode('id')?.value;
        if (value && value === 'dropDownButton') {
            return
        } else {
            setShowItem([false,false,false]);
        }
    }, [])

    useEffect(()=>{
        document.addEventListener('click', (e)=>{closeList(e)});
        return document.removeEventListener('click',(e)=>{closeList(e)});
    }, []);

    const showList = useCallback(index => {
        const newShowItem = showItem.map((item, key) => {
            if (key === index){
                return !item;
            } else {
                return false;
            }
        })
        setShowItem([...newShowItem]);
    }, [showItem]);
    
    return (
        <div className={styles.downloadContainer}>
            {data.map((item, index) => {
                const { versions, title } = item;
                return (
                    <div className={styles.downloadCard}>
                        <div className={styles.downloadCardTitle}>{title}</div>
                        <button id= 'dropDownButton' className={styles.downloadCardButton} onClick={() => { showList(index) }}><Translate>Source</Translate></button>
                        {
                            showItem[index] &&
                            (
                                <div className={styles.dropDownContainer}>
                                    {
                                        versions.map(item2 => {
                                            const { versionTitle, targets } = item2;
                                            const listArr = Object.keys(targets).map(list => {
                                                return {
                                                    title: list,
                                                    link: targets[list],
                                                }
                                            })
                                            return (
                                                <div>
                                                    <div className={styles.versionTitle}>{versionTitle}</div>
                                                    <div className={styles.downloadLinks}>
                                                        {listArr.map(url => {
                                                            const title = '[' + url.title + ']'
                                                            return (
                                                                <a href={url.link}>{title}</a>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        }
                    </div>
                )
            })}
        </div>
    )
};

export default DownloadCompoent;