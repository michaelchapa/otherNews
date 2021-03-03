import React, { useState, useEffect } from 'react'
import Link from '@material-ui/core/Link'
import axios from 'axios'

export default function Window( { outletTitle, outletURL, feedURL, outletColor }) {
  const [links, setLinks] = useState([]);

  const styles = {
    window: {
        marginBottom: "6px",
        padding: "5px",
        backgroundColor: outletColor
    },
    outletTitle: {
        color: "black",
        fontWeight: "bold",
        display: "block"
    },
    link: {
        color: "black",
        display: "block",
        justifyContent: "left",
        marginBottom: "6px"
    }
}

  useEffect(() => {
    async function fetchLinks() {
        const feed = await axios('/cors-proxy/' + feedURL);
        setLinks(feed.data);
      }

    fetchLinks();
  }, [feedURL]);

  return (
    <div className = "Window" style = {styles.window}>
		<Link href = {outletURL} style = {styles.outletTitle}>{outletTitle}</Link>
        {links.map((feed) => {
            return <Link key = {feed.link} href = {feed.link} style = {styles.link}>{feed.title}</Link>
        })}
    </div>
  );
}