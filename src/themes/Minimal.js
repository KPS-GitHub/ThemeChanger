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
      padding: '0.5rem 2rem',
      position: 'relative'
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
      slide: {
        container: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        },
        title: {
          textAlign: 'center',
          width: '75%'
        },
        image: {
          width: '100%',
          height: '100%'
        },
        copy: {
          textAlign: 'center',
          width: '75%'
        }
      },
      button: {
        border: 0,
        background: 'none',
      },
      buttonHovered: {
        border: 0,
        background: '#ededed'
      },
      buttonText: {
        transform: 'scaleY(4) scaleX(2)',
        fontSize: '1.5rem',
        fontWeight: 100
      }
    },
    list: {

    },
    rightBorderDiv: {
      position: 'absolute',
      zIndex: -10,
      left: 0,
      bottom: '2.5%',
      width: '100%',
      height: '95%',
      borderRight: '3px solid #ededed',
      marginBottom: 0
    },
  }
}

export default MinimalThemeOptions;