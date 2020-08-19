export default {
    palette: {
        primary: {
            light: '#611dc6',
            main: 'rgba(25,119,242,0.84)',
            dark: '#1977f2',
            contrastText: '#f4fdfc'
        },
        secondary: {
            light: '#419961',
            main: 'rgba(220,39,39,0.88)',
            dark: 'rgba(66,183,42,0.97)',
            contrastText: '#f0f2f5'
        }
    },
        spreadThis: {
            typography: {
                useNextVariants: true
            },
            form: {
                margin: '10px auto 10px auto',
                textAlign: 'center',
                maxWidth: 500,
                minHeight: 550,
                borderRadius: 50
            },
            image: {
                marginTop: 20,
                maxWidth: 250
            },
            pageTitle: {
                margin: '10px auto 10px auto'
            },
            textField: {
                margin: '10px auto 10px auto'

            },
            button: {
                marginTop: 20,
                position: 'relative'
            },
            customError: {
                color: 'red',
                fontSize: '0.8rem',
                marginTop: 10
            },
            progress: {
                position: 'absolute'
            },
        },
    invisibleSeparator: {
        border: 'none',
        margin: 4
    },
    visibleSeparator: {
        width: '100%',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        marginBottom: 10
    },
    paper: {
        padding: 20,
    },
    profile: {
        '& .image-wrapper': {
            textAlign: 'center',
            position: 'relative',
            '& button': {
                position: 'absolute',
                top: '80%',
                left: '70%'
            }
        },
        '& .profile-image': {
            width: 200,
            height: 200,
            objectFit: 'cover',
            maxWidth: '100%',
            borderRadius: '50%'
        },
        '& .profile-details': {
            textAlign: 'center',
            '& span, svg': {
                verticalAlign: 'middle'
            },
            '& a': {
                color: '#00bcd4'
            }
        },
        '& hr': {
            border: 'none',
            margin: '0 0 10px 0'
        },
        '& svg.button': {
            '&:hover': {
                cursor: 'pointer'
            }
        }
    },
    buttons: {
        textAlign: 'center',
        '& a': {
            margin: '20px 10px'
        }
    }

};
