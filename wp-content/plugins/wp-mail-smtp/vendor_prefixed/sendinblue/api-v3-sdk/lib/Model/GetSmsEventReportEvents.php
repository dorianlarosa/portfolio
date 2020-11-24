<?php

/**
 * GetSmsEventReportEvents
 *
 * PHP version 5
 *
 * @category Class
 * @package  SendinBlue\Client
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
/**
 * SendinBlue API
 *
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  |
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@sendinblue.com
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 * Swagger Codegen version: 2.4.12
 */
/**
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */
namespace WPMailSMTP\Vendor\SendinBlue\Client\Model;

use ArrayAccess;
use WPMailSMTP\Vendor\SendinBlue\Client\ObjectSerializer;
/**
 * GetSmsEventReportEvents Class Doc Comment
 *
 * @category Class
 * @package  SendinBlue\Client
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class GetSmsEventReportEvents implements \WPMailSMTP\Vendor\SendinBlue\Client\Model\ModelInterface, \ArrayAccess
{
    const DISCRIMINATOR = null;
    /**
     * The original name of the model.
     *
     * @var string
     */
    protected static $swaggerModelName = 'getSmsEventReport_events';
    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @var string[]
     */
    protected static $swaggerTypes = ['phoneNumber' => 'string', 'date' => '\\DateTime', 'messageId' => 'string', 'event' => 'string', 'reason' => 'string', 'reply' => 'string', 'tag' => 'string'];
    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @var string[]
     */
    protected static $swaggerFormats = ['phoneNumber' => null, 'date' => 'date-time', 'messageId' => null, 'event' => null, 'reason' => null, 'reply' => null, 'tag' => null];
    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function swaggerTypes()
    {
        return self::$swaggerTypes;
    }
    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function swaggerFormats()
    {
        return self::$swaggerFormats;
    }
    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = ['phoneNumber' => 'phoneNumber', 'date' => 'date', 'messageId' => 'messageId', 'event' => 'event', 'reason' => 'reason', 'reply' => 'reply', 'tag' => 'tag'];
    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = ['phoneNumber' => 'setPhoneNumber', 'date' => 'setDate', 'messageId' => 'setMessageId', 'event' => 'setEvent', 'reason' => 'setReason', 'reply' => 'setReply', 'tag' => 'setTag'];
    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = ['phoneNumber' => 'getPhoneNumber', 'date' => 'getDate', 'messageId' => 'getMessageId', 'event' => 'getEvent', 'reason' => 'getReason', 'reply' => 'getReply', 'tag' => 'getTag'];
    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }
    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }
    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }
    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$swaggerModelName;
    }
    const EVENT_BOUNCES = 'bounces';
    const EVENT_HARD_BOUNCES = 'hardBounces';
    const EVENT_SOFT_BOUNCES = 'softBounces';
    const EVENT_DELIVERED = 'delivered';
    const EVENT_SENT = 'sent';
    const EVENT_ACCEPTED = 'accepted';
    const EVENT_UNSUBSCRIPTION = 'unsubscription';
    const EVENT_REPLIES = 'replies';
    const EVENT_BLOCKED = 'blocked';
    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getEventAllowableValues()
    {
        return [self::EVENT_BOUNCES, self::EVENT_HARD_BOUNCES, self::EVENT_SOFT_BOUNCES, self::EVENT_DELIVERED, self::EVENT_SENT, self::EVENT_ACCEPTED, self::EVENT_UNSUBSCRIPTION, self::EVENT_REPLIES, self::EVENT_BLOCKED];
    }
    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];
    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->container['phoneNumber'] = isset($data['phoneNumber']) ? $data['phoneNumber'] : null;
        $this->container['date'] = isset($data['date']) ? $data['date'] : null;
        $this->container['messageId'] = isset($data['messageId']) ? $data['messageId'] : null;
        $this->container['event'] = isset($data['event']) ? $data['event'] : null;
        $this->container['reason'] = isset($data['reason']) ? $data['reason'] : null;
        $this->container['reply'] = isset($data['reply']) ? $data['reply'] : null;
        $this->container['tag'] = isset($data['tag']) ? $data['tag'] : null;
    }
    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];
        if ($this->container['phoneNumber'] === null) {
            $invalidProperties[] = "'phoneNumber' can't be null";
        }
        if ($this->container['date'] === null) {
            $invalidProperties[] = "'date' can't be null";
        }
        if ($this->container['messageId'] === null) {
            $invalidProperties[] = "'messageId' can't be null";
        }
        if ($this->container['event'] === null) {
            $invalidProperties[] = "'event' can't be null";
        }
        $allowedValues = $this->getEventAllowableValues();
        if (!\is_null($this->container['event']) && !\in_array($this->container['event'], $allowedValues, \true)) {
            $invalidProperties[] = \sprintf("invalid value for 'event', must be one of '%s'", \implode("', '", $allowedValues));
        }
        return $invalidProperties;
    }
    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return \count($this->listInvalidProperties()) === 0;
    }
    /**
     * Gets phoneNumber
     *
     * @return string
     */
    public function getPhoneNumber()
    {
        return $this->container['phoneNumber'];
    }
    /**
     * Sets phoneNumber
     *
     * @param string $phoneNumber Phone number which has generated the event
     *
     * @return $this
     */
    public function setPhoneNumber($phoneNumber)
    {
        $this->container['phoneNumber'] = $phoneNumber;
        return $this;
    }
    /**
     * Gets date
     *
     * @return \DateTime
     */
    public function getDate()
    {
        return $this->container['date'];
    }
    /**
     * Sets date
     *
     * @param \DateTime $date UTC date-time on which the event has been generated
     *
     * @return $this
     */
    public function setDate($date)
    {
        $this->container['date'] = $date;
        return $this;
    }
    /**
     * Gets messageId
     *
     * @return string
     */
    public function getMessageId()
    {
        return $this->container['messageId'];
    }
    /**
     * Sets messageId
     *
     * @param string $messageId Message ID which generated the event
     *
     * @return $this
     */
    public function setMessageId($messageId)
    {
        $this->container['messageId'] = $messageId;
        return $this;
    }
    /**
     * Gets event
     *
     * @return string
     */
    public function getEvent()
    {
        return $this->container['event'];
    }
    /**
     * Sets event
     *
     * @param string $event Event which occurred
     *
     * @return $this
     */
    public function setEvent($event)
    {
        $allowedValues = $this->getEventAllowableValues();
        if (!\in_array($event, $allowedValues, \true)) {
            throw new \InvalidArgumentException(\sprintf("Invalid value for 'event', must be one of '%s'", \implode("', '", $allowedValues)));
        }
        $this->container['event'] = $event;
        return $this;
    }
    /**
     * Gets reason
     *
     * @return string
     */
    public function getReason()
    {
        return $this->container['reason'];
    }
    /**
     * Sets reason
     *
     * @param string $reason Reason of bounce (only available if the event is hardbounce or softbounce)
     *
     * @return $this
     */
    public function setReason($reason)
    {
        $this->container['reason'] = $reason;
        return $this;
    }
    /**
     * Gets reply
     *
     * @return string
     */
    public function getReply()
    {
        return $this->container['reply'];
    }
    /**
     * Sets reply
     *
     * @param string $reply reply
     *
     * @return $this
     */
    public function setReply($reply)
    {
        $this->container['reply'] = $reply;
        return $this;
    }
    /**
     * Gets tag
     *
     * @return string
     */
    public function getTag()
    {
        return $this->container['tag'];
    }
    /**
     * Sets tag
     *
     * @param string $tag Tag of the SMS which generated the event
     *
     * @return $this
     */
    public function setTag($tag)
    {
        $this->container['tag'] = $tag;
        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset)
    {
        return isset($this->container[$offset]);
    }
    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed
     */
    public function offsetGet($offset)
    {
        return isset($this->container[$offset]) ? $this->container[$offset] : null;
    }
    /**
     * Sets value based on offset.
     *
     * @param integer $offset Offset
     * @param mixed   $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value)
    {
        if (\is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }
    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset)
    {
        unset($this->container[$offset]);
    }
    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        if (\defined('JSON_PRETTY_PRINT')) {
            // use JSON pretty print
            return \json_encode(\WPMailSMTP\Vendor\SendinBlue\Client\ObjectSerializer::sanitizeForSerialization($this), \JSON_PRETTY_PRINT);
        }
        return \json_encode(\WPMailSMTP\Vendor\SendinBlue\Client\ObjectSerializer::sanitizeForSerialization($this));
    }
}
