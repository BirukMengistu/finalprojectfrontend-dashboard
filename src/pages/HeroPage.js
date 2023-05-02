import { Title, Text, Container, Button, Overlay, createStyles, rem } from '@mantine/core';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'absoulte',
    paddingTop: rem(180),
    paddingBottom: rem(130),
    backgroundImage:'url("../assets/images/HeroImage.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    [theme.fn.smallerThan('xs')]: {
      paddingTop: rem(80),
      paddingBottom: rem(50),
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: rem(-1),
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: 'center',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      textAlign: 'left',
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: 'center',

    [theme.fn.smallerThan('xs')]: {
      fontSize: theme.fontSizes.md,
      textAlign: 'left',
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  control: {
    height: rem(42),
    fontSize: theme.fontSizes.md,

    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan('xs')]: {
      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: 'rgba(255, 255, 255, .4)',

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, .45) !important',
    },
  },
}));

export default function HeroImageBackground(){
  const { classes, cx } = useStyles();
  const {showHero, setShowHero} = useState(false)
  return ( !showHero &&
     <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Professional Hub desgin for{' '}
          <Text component="span" inherit className={classes.highlight}>
            any developer
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Welcome to Professional HubShow, The plece to show what you have and what you can to friend and Company. 
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg"
             onClick={()=>setShowHero(true)}>
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
}
