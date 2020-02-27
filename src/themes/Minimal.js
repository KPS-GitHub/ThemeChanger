const MinimalThemeOptions = {
  window: {
    fontFamily: 'sans-serif'
  },
  main: {
  },
  header: {
    container: {
      background: '#ededed',
      color: 'black',
    }
  },
  footer: {
    container: {
      background: '#ededed',
      color: 'black',
    }
  },
  sidebar: {
    container: {
      background: '#ededed',
      color: 'black',
      paddingTop: '25px',
      margin: '5px 0'
    },
    content: {
      list: {
        listStyleType: 'none',
        paddingLeft: 0
      },
      itemButton: {
        WebkitAppearance: 'none',
        background: '#ededed',
        color: 'black',
        marginTop: '10px'
      },
      itemButtonActive: {
        WebkitAppearance: 'none',
        background: 'white',
        color: 'black',
        marginTop: '10px'
      }
    }
  },
  pageContent: {
    container: {

    },
    hero: {
      picAndCopy: {
        alignItems: 'center',
      },
      image: {
        borderRadius: '1000px',
      }
    },
    slider: {

    },
    list: {

    }
  }
}

export default MinimalThemeOptions;