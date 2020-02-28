const MinimalThemeOptions = {
  window: {
    fontFamily: 'roboto',
    fontWeight: 100,
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
        marginTop: '10px',
        fontWeight: 'inherit'
      },
      itemButtonActive: {
        WebkitAppearance: 'none',
        background: 'white',
        color: 'black',
        marginTop: '10px',
        fontWeight: 'inherit'
      }
    }
  },
  pageContent: {
    container: {
      margin: '3rem 0',
      padding: '0 3rem',
      borderRight: '2px solid #ededed'
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