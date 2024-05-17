import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import "./App.css";

function App() {
    return (
        <Flex
            w="100%"
            minH="100vh"
            height={{
                base: "200vh",
                sm: "200vh",
                md: "150vh",
                lg: "100vh",
                xl: "100vh",
                "2xl": "100vh",
            }}
            backgroundColor="white"
            p={{
                base: "10px",
                sm: "10px",
                md: "10px",
                lg: "10px",
                xl: "30px",
                "2xl": "30px",
            }}
            gap="30px"
            flexDir={{
                base: "column",
                sm: "column",
                md: "column",
                lg: "row",
                xl: "row",
                "2xl": "row",
            }}
        >
            <Flex
                className="fadeinleft"
                w={{
                    base: "100%",
                    sm: "100%",
                    md: "100%",
                    lg: "75%",
                    xl: "75%",
                    "2xl": "75%",
                }}
                h={{
                    base: "200%",
                    sm: "200%",
                    md: "100%",
                    lg: "100%",
                    xl: "100%",
                    "2xl": "100%",
                }}
                backgroundImage={`url("images/field.jpg")`}
                backgroundPosition="center"
                backgroundSize="cover"
                borderRadius="20px"
                position="relative"
            >
                <Flex
                    w="fit-content"
                    h="fit-content"
                    bgColor="white"
                    p={{
                        base: "10px",
                        sm: "10px",
                        md: "10px",
                        lg: "10px",
                        xl: "20px",
                        "2xl": "20px",
                    }}
                    borderBottomRightRadius={{
                        base: "10px",
                        sm: "10px",
                        md: "10px",
                        lg: "10px",
                        xl: "20px",
                        "2xl": "20px",
                    }}
                    position="absolute"
                    top="-5px"
                    left="-5px"
                >
                    <Button
                        size={{
                            base: "sm",
                            sm: "sm",
                            md: "sm",
                            lg: "sm",
                            xl: "md",
                            "2xl": "md",
                        }}
                        color="white"
                        bgColor="black"
                        fontSize="20px"
                        fontWeight="800"
                        p="0px"
                    >
                        <i class="fa-solid fa-bars"></i>
                    </Button>
                </Flex>
                <Flex
                    w="fit-content"
                    h="fit-content"
                    bgColor="white"
                    p="10px 20px"
                    position="absolute"
                    top="-10px"
                    left={{
                        base: "80px",
                        sm: "80px",
                        md: "calc(100% - 135% / 2);",
                        lg: "calc(100% - 135% / 2);",
                        xl: "calc(100% - 135% / 2);",
                        "2xl": "calc(100% - 135% / 2);",
                    }}
                    borderBottomRadius="20px"
                >
                    <HStack w="fit-content" h="fit-content">
                        <Box
                            w="fit-content"
                            h="fit-content"
                            fontSize={{
                                base: "12px",
                                sm: "12px",
                                md: "16px",
                                lg: "20px",
                                xl: "25px",
                                "2xl": "25px",
                            }}
                        >
                            <i class="fa-solid fa-leaf"></i>
                        </Box>
                        <Text
                            fontSize={{
                                base: "15px",
                                sm: "15px",
                                md: "20px",
                                lg: "20px",
                                xl: "35px",
                                "2xl": "35px",
                            }}
                            fontWeight="700"
                            p="0"
                        >
                            Agritech
                        </Text>
                    </HStack>
                </Flex>
                <Flex
                    w="fit-content"
                    h="fit-content"
                    bgColor="white"
                    p="15px 20px"
                    position="absolute"
                    top="-10px"
                    right="0px"
                    borderBottomLeftRadius="20px"
                >
                    <HStack
                        w="fit-content"
                        h="fit-content"
                        spacing={{
                            base: "3",
                            sm: "3",
                            md: "3",
                            lg: "3",
                            xl: "6",
                            "2xl": "6",
                        }}
                        _hover={{ cursor: "pointer" }}
                    >
                        <Text
                            fontSize={{
                                base: "12px",
                                sm: "12px",
                                md: "20px",
                                lg: "20px",
                                xl: "30px",
                                "2xl": "30px",
                            }}
                        >
                            Contact Us
                        </Text>
                        <Box
                            w="fit-content"
                            h="fit-content"
                            fontSize={{
                                base: "12px",
                                sm: "12px",
                                md: "15px",
                                lg: "20px",
                                xl: "22px",
                                "2xl": "22px",
                            }}
                        >
                            <i class="fa-solid fa-paper-plane"></i>
                        </Box>
                    </HStack>
                </Flex>
                <Flex
                    w="fit-content"
                    h="fit-content"
                    position="absolute"
                    bottom="0px"
                    left="0px"
                    flexDir="column"
                >
                    <Flex
                        w="fit-content"
                        h="fit-content"
                        bgColor="white"
                        flexDir="column"
                        paddingRight={{
                            base: "12px",
                            sm: "12px",
                            md: "20px",
                            lg: "20px",
                            xl: "50px",
                            "2xl": "50px",
                        }}
                        borderTopRightRadius="20px"
                    >
                        <Text
                            fontSize={{
                                base: "12px",
                                sm: "12px",
                                md: "20px",
                                lg: "20px",
                                xl: "25px",
                                "2xl": "25px",
                            }}
                        >
                            Agricultural technology
                        </Text>
                    </Flex>
                    <Flex
                        w="fit-content"
                        h="fit-content"
                        bgColor="white"
                        flexDir="column"
                        paddingRight={{
                            base: "12px",
                            sm: "12px",
                            md: "50px",
                            lg: "50px",
                            xl: "50px",
                            "2xl": "50px",
                        }}
                        borderTopRightRadius="20px"
                    >
                        <Text
                            fontSize={{
                                base: "20px",
                                sm: "20px",
                                md: "30px",
                                lg: "30px",
                                xl: "50px",
                                "2xl": "50px",
                            }}
                            fontWeight="600"
                        >
                            Towards Greening
                        </Text>
                        <Text
                            fontSize={{
                                base: "20px",
                                sm: "20px",
                                md: "30px",
                                lg: "30px",
                                xl: "50px",
                                "2xl": "50px",
                            }}
                            fontWeight="600"
                        >
                            With Technology
                        </Text>
                    </Flex>
                </Flex>
                <Flex
                    className="scaleincenter"
                    w={{
                        base: "250px",
                        sm: "250px",
                        md: "400px",
                        lg: "500px",
                        xl: "500px",
                        "2xl": "500px",
                    }}
                    h={{
                        base: "50%",
                        sm: "50%",
                        md: "60%",
                        lg: "500px",
                        xl: "500px",
                        "2xl": "500px",
                    }}
                    pos="absolute"
                    bottom={{
                        base: "100px",
                        sm: "100px",
                        md: "30px",
                        lg: "150px",
                        xl: "30px",
                        "2xl": "30px",
                    }}
                    right={{
                        base: "10px",
                        sm: "10px",
                        md: "20px",
                        lg: "30px",
                        xl: "30px",
                        "2xl": "30px",
                    }}
                    flexDir="column"
                    justifyContent="space-between"
                >
                    <Flex
                        className="scaleincenter"
                        w={{
                            base: "100%",
                            sm: "100%",
                            md: "100%",
                            lg: "100%",
                            xl: "100%",
                            "2xl": "100%",
                        }}
                        h={{
                            base: "50%",
                            sm: "50%",
                            md: "50%",
                            lg: "50%",
                            xl: "50%",
                            "2xl": "50%",
                        }}
                        borderRadius="20px"
                        justifyContent="space-between"
                        p={{
                            base: "10px",
                            sm: "10px",
                            md: "15px",
                            lg: "20px",
                            xl: "20px",
                            "2xl": "20px",
                        }}
                        border="1px solid white"
                        bgColor="#7070702c"
                        backdropFilter={`blur(10px)`}
                    >
                        <Flex
                            w="35%"
                            h="100%"
                            flexDir="column"
                            justifyContent="space-between"
                        >
                            <Text
                                fontSize={{
                                    base: "12px",
                                    sm: "12px",
                                    md: "15px",
                                    lg: "30px",
                                    xl: "30px",
                                    "2xl": "30px",
                                }}
                                color="white"
                            >
                                <i class="fa-solid fa-seedling"></i>
                            </Text>
                            <Text
                                fontSize={{
                                    base: "14px",
                                    sm: "14px",
                                    md: "14px",
                                    lg: "25px",
                                    xl: "25px",
                                    "2xl": "25px",
                                }}
                                color="white"
                                fontWeight="600"
                            >
                                Plant Monitoring System
                            </Text>
                        </Flex>
                        <Flex w="60%" h="100%">
                            <Box>
                                <Image
                                    w="100%"
                                    h="100%"
                                    src="images/plant.jpeg"
                                    objectFit="cover"
                                    borderRadius="20px"
                                />
                            </Box>
                        </Flex>
                    </Flex>
                    <Flex
                        w="100%"
                        h="18%"
                        alignItems="flex-end"
                        justifyContent="space-between"
                    >
                        <Flex
                            className="scaleincenter"
                            w={{
                                base: "30px",
                                sm: "30px",
                                md: "25%",
                                lg: "25%",
                                xl: "25%",
                                "2xl": "25%",
                            }}
                            h={{
                                base: "45px",
                                sm: "45px",
                                md: "90%",
                                lg: "100%",
                                xl: "100%",
                                "2xl": "100%",
                            }}
                            justifyContent="center"
                            alignItems="center"
                            p={{
                                base: "10px 20px",
                                sm: "10px 20px",
                                md: "10px 20px",
                                lg: "15px 25px",
                                xl: "15px 25px",
                                "2xl": "15px 25px",
                            }}
                            borderRadius={{
                                base: "15px",
                                sm: "15px",
                                md: "20px",
                                lg: "20px",
                                xl: "20px",
                                "2xl": "20px",
                            }}
                            border="1px solid white"
                            bgColor="#7070702c"
                            backdropFilter={`blur(10px)`}
                            _hover={{ cursor: "pointer" }}
                        >
                            <Text
                                w="fit-content"
                                h="fit-content"
                                color="white"
                                fontSize={{
                                    base: "12px",
                                    sm: "12px",
                                    md: "16px",
                                    lg: "30px",
                                    xl: "30px",
                                    "2xl": "30px",
                                }}
                            >
                                <i class="fa-solid fa-seedling"></i>
                            </Text>
                        </Flex>
                        <Flex
                            className="scaleincenter"
                            w={{
                                base: "30px",
                                sm: "30px",
                                md: "25%",
                                lg: "25%",
                                xl: "25%",
                                "2xl": "25%",
                            }}
                            h={{
                                base: "45px",
                                sm: "45px",
                                md: "90%",
                                lg: "100%",
                                xl: "100%",
                                "2xl": "100%",
                            }}
                            justifyContent="center"
                            alignItems="center"
                            p={{
                                base: "10px 20px",
                                sm: "10px 20px",
                                md: "10px 20px",
                                lg: "15px 25px",
                                xl: "15px 25px",
                                "2xl": "15px 25px",
                            }}
                            borderRadius={{
                                base: "15px",
                                sm: "15px",
                                md: "20px",
                                lg: "20px",
                                xl: "20px",
                                "2xl": "20px",
                            }}
                            border="1px solid white"
                            bgColor="#7070702c"
                            backdropFilter={`blur(10px)`}
                            _hover={{ cursor: "pointer" }}
                        >
                            <Text
                                w="fit-content"
                                h="fit-content"
                                color="white"
                                fontSize={{
                                    base: "12px",
                                    sm: "12px",
                                    md: "16px",
                                    lg: "30px",
                                    xl: "30px",
                                    "2xl": "30px",
                                }}
                            >
                                <i
                                    z-index="2"
                                    pos="absolute"
                                    class="fa-solid fa-microchip"
                                ></i>
                            </Text>
                        </Flex>
                        <Flex
                            w={{
                                base: "30px",
                                sm: "30px",
                                md: "25%",
                                lg: "25%",
                                xl: "25%",
                                "2xl": "25%",
                            }}
                            h={{
                                base: "45px",
                                sm: "45px",
                                md: "90%",
                                lg: "100%",
                                xl: "100%",
                                "2xl": "100%",
                            }}
                            justifyContent="center"
                            alignItems="center"
                            p={{
                                base: "10px 20px",
                                sm: "10px 20px",
                                md: "10px 20px",
                                lg: "15px 25px",
                                xl: "15px 25px",
                                "2xl": "15px 25px",
                            }}
                            borderRadius={{
                                base: "15px",
                                sm: "15px",
                                md: "20px",
                                lg: "20px",
                                xl: "20px",
                                "2xl": "20px",
                            }}
                            border="1px solid white"
                            bgColor="#7070702c"
                            backdropFilter={`blur(10px)`}
                            _hover={{ cursor: "pointer" }}
                        >
                            <Text
                                w="fit-content"
                                h="fit-content"
                                color="white"
                                fontSize={{
                                    base: "12px",
                                    sm: "12px",
                                    md: "16px",
                                    lg: "30px",
                                    xl: "30px",
                                    "2xl": "30px",
                                }}
                            >
                                <i
                                    z-index="2"
                                    pos="absolute"
                                    class="fa-solid fa-dna"
                                ></i>
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex
                w={{
                    base: "100%",
                    sm: "100%",
                    md: "100%",
                    lg: "25%",
                    xl: "25%",
                    "2xl": "25%",
                }}
                h={{
                    base: "250%",
                    sm: "250%",
                    md: "100%",
                    lg: "100%",
                    xl: "100%",
                    "2xl": "100%",
                }}
                backgroundColor="white"
                flexDir="column"
                gap="30px"
            >
                <Flex
                    className="fadeinright"
                    w={{
                        base: "100%",
                        sm: "100%",
                        md: "100%",
                        lg: "100%",
                        xl: "100%",
                        "2xl": "100%",
                    }}
                    h={{
                        base: "8%",
                        sm: "8%",
                        md: "8%",
                        lg: "8%",
                        xl: "8%",
                        "2xl": "8%",
                    }}
                    m="0px"
                    p="0"
                >
                    <HStack spacing="1" w="fit-content" h="fit-content">
                        <Button
                            w="fit-content"
                            h="fit-content"
                            borderRadius="50px"
                            bgColor="black"
                            color="white"
                            p={{
                                base: "15px 22px",
                                sm: "15px 22px",
                                md: "15px 22px",
                                lg: "15px 22px",
                                xl: "15px 22px",
                                "2xl": "15px 22px",
                            }}
                            border="2px solid black"
                        >
                            <Text
                                fontSize={{
                                    base: "18px",
                                    sm: "18px",
                                    md: "25px",
                                    lg: "20px",
                                    xl: "20px",
                                    "2xl": "20px",
                                }}
                            >
                                Home
                            </Text>
                        </Button>
                        <Button
                            w="fit-content"
                            h="fit-content"
                            borderRadius="50px"
                            p="15px 22px"
                            border="2px solid gray"
                        >
                            <Text
                                fontSize={{
                                    base: "18px",
                                    sm: "18px",
                                    md: "25px",
                                    lg: "20px",
                                    xl: "20px",
                                    "2xl": "20px",
                                }}
                            >
                                Product
                            </Text>
                        </Button>
                        <Button
                            w="fit-content"
                            h="fit-content"
                            borderRadius="50px"
                            p="15px 22px"
                            border="2px solid gray"
                        >
                            <Text
                                fontSize={{
                                    base: "18px",
                                    sm: "18px",
                                    md: "25px",
                                    lg: "20px",
                                    xl: "20px",
                                    "2xl": "20px",
                                }}
                            >
                                Payment
                            </Text>
                        </Button>
                    </HStack>
                </Flex>
                <Flex
                    className="fadeinright"
                    w={{
                        base: "100%",
                        sm: "100%",
                        md: "100%",
                        lg: "100%",
                        xl: "100%",
                        "2xl": "100%",
                    }}
                    h={{
                        base: "45%",
                        sm: "45%",
                        md: "45%",
                        lg: "45%",
                        xl: "45%",
                        "2xl": "45%",
                    }}
                    p={{
                        base: "10px",
                        sm: "10px",
                        md: "10px",
                        lg: "10px",
                        xl: "10px",
                        "2xl": "10px",
                    }}
                    backgroundImage={`url("images/ble.jpg")`}
                    backgroundPosition="center"
                    backgroundSize="cover"
                    borderRadius="15px"
                    flexDir="column"
                    justifyContent="space-between"
                    position="relative"
                >
                    <Flex
                        w="50px"
                        h="50px"
                        justifyContent="center"
                        alignItems="center"
                        position="absolute"
                        top="-15px"
                        right="-15px"
                        bgColor="#ffffff00"
                        p="25px"
                        border="15px solid white"
                        borderBottomLeftRadius="20px"
                        borderTopRightRadius="20px"
                    >
                        <Text
                            color="white"
                            transform={`rotate(45deg)`}
                            fontSize="18px"
                        >
                            <i class="fa-solid fa-arrow-up"></i>
                        </Text>
                    </Flex>
                    <Text
                        w="fit-content"
                        h="fit-content"
                        bgColor="white"
                        p={{
                            base: "10px 20px",
                            sm: "10px 20px",
                            md: "10px 20px",
                            lg: "10px 20px",
                            xl: "10px 20px",
                            "2xl": "10px 20px",
                        }}
                        borderRadius="20px"
                        fontWeight="700"
                    >
                        Smart Soil Sensor
                    </Text>
                    <Text
                        w={{
                            base: "100%",
                            sm: "100%",
                            md: "100%",
                            lg: "100%",
                            xl: "100%",
                            "2xl": "100%",
                        }}
                        h={{
                            base: "fit-content",
                            sm: "fit-content",
                            md: "fit-content",
                            lg: "fit-content",
                            xl: "fit-content",
                            "2xl": "fit-content",
                        }}
                        p={{
                            base: "20px",
                            sm: "20px",
                            md: "20px",
                            lg: "20px",
                            xl: "20px",
                            "2xl": "20px",
                        }}
                        borderRadius="15px"
                        justifyContent="space-between"
                        border="1px solid white"
                        bgColor="#7070702c"
                        color="white"
                        backdropFilter={`blur(10px)`}
                    >
                        With accurate data on soil moisture, pH and nutrients,
                        you can make better decisions in your farm management.
                    </Text>
                </Flex>
                <Flex
                    className="fadeinright"
                    w={{
                        base: "100%",
                        sm: "100%",
                        md: "100%",
                        lg: "100%",
                        xl: "100%",
                        "2xl": "100%",
                    }}
                    h={{
                        base: "45%",
                        sm: "45%",
                        md: "45%",
                        lg: "45%",
                        xl: "45%",
                        "2xl": "45%",
                    }}
                    p={{
                        base: "10px",
                        sm: "10px",
                        md: "10px",
                        lg: "10px",
                        xl: "10px",
                        "2xl": "10px",
                    }}
                    backgroundImage={`url("images/drone.jpg")`}
                    backgroundPosition="center"
                    backgroundSize="cover"
                    borderRadius="15px"
                    flexDir="column"
                    justifyContent="space-between"
                    position="relative"
                >
                    <Flex
                        w="50px"
                        h="50px"
                        justifyContent="center"
                        alignItems="center"
                        position="absolute"
                        top="-15px"
                        right="-15px"
                        bgColor="#ffffff00"
                        p="25px"
                        border="15px solid white"
                        borderBottomLeftRadius="20px"
                        borderTopRightRadius="20px"
                    >
                        <Text
                            color="white"
                            transform={`rotate(45deg)`}
                            fontSize="18px"
                        >
                            <i class="fa-solid fa-arrow-up"></i>
                        </Text>
                    </Flex>
                    <Text
                        w="fit-content"
                        h="fit-content"
                        bgColor="white"
                        p={{
                            base: "10px 20px",
                            sm: "10px 20px",
                            md: "10px 20px",
                            lg: "10px 20px",
                            xl: "10px 20px",
                            "2xl": "10px 20px",
                        }}
                        borderRadius="20px"
                        fontWeight="700"
                    >
                        Modern Agriculture
                    </Text>
                    <Text
                        w={{
                            base: "100%",
                            sm: "100%",
                            md: "100%",
                            lg: "100%",
                            xl: "100%",
                            "2xl": "100%",
                        }}
                        h={{
                            base: "fit-content",
                            sm: "fit-content",
                            md: "fit-content",
                            lg: "fit-content",
                            xl: "fit-content",
                            "2xl": "fit-content",
                        }}
                        p={{
                            base: "20px",
                            sm: "20px",
                            md: "20px",
                            lg: "20px",
                            xl: "20px",
                            "2xl": "20px",
                        }}
                        borderRadius="15px"
                        justifyContent="space-between"
                        border="1px solid white"
                        bgColor="#7070702c"
                        color="white"
                        backdropFilter={`blur(10px)`}
                    >
                        From automatic irrigation systems to smart soil sensors,
                        we offer a variety of products and services to meet your
                        agricultural needs.
                    </Text>
                </Flex>
                <Flex
                    className="fadeinright"
                    w={{
                        base: "100%",
                        sm: "100%",
                        md: "100%",
                        lg: "100%",
                        xl: "100%",
                        "2xl": "100%",
                    }}
                    h={{
                        base: "12%",
                        sm: "12%",
                        md: "12%",
                        lg: "12%",
                        xl: "12%",
                        "2xl": "12%",
                    }}
                    m="0px"
                    p="0"
                >
                    <HStack spacing="1" w="100%" h="100%">
                        <Flex
                            w="80%"
                            h="100%"
                            borderRadius="20px"
                            p={{
                                base: "15px 22px",
                                sm: "15px 22px",
                                md: "15px 22px",
                                lg: "15px 22px",
                                xl: "15px 22px",
                                "2xl": "15px 22px",
                            }}
                            bgColor="black"
                            justifyContent="center"
                            alignItems="center"
                            _hover={{ cursor: "pointer" }}
                        >
                            <Text
                                fontSize={{
                                    base: "18px",
                                    sm: "18px",
                                    md: "25px",
                                    lg: "25px",
                                    xl: "25px",
                                    "2xl": "25px",
                                }}
                                color="white"
                            >
                                Discover More
                            </Text>
                        </Flex>
                        <Flex
                            w="20%"
                            h="100%"
                            borderRadius="20px"
                            p={{
                                base: "15px 22px",
                                sm: "15px 22px",
                                md: "15px 22px",
                                lg: "15px 22px",
                                xl: "15px 22px",
                                "2xl": "15px 22px",
                            }}
                            bgColor="black"
                            justifyContent="center"
                            alignItems="center"
                            _hover={{ cursor: "pointer" }}
                        >
                            <Text
                                fontSize={{
                                    base: "18px",
                                    sm: "18px",
                                    md: "25px",
                                    lg: "25px",
                                    xl: "25px",
                                    "2xl": "25px",
                                }}
                                color="white"
                                transform={`rotate(45deg)`}
                            >
                                <i class="fa-solid fa-arrow-up"></i>
                            </Text>
                        </Flex>
                    </HStack>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default App;
