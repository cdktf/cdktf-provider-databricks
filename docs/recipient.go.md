# `databricks_recipient`

Refer to the Terraform Registory for docs: [`databricks_recipient`](https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/resources/recipient).

# `recipient` Submodule <a name="`recipient` Submodule" id="@cdktf/provider-databricks.recipient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Recipient <a name="Recipient" id="@cdktf/provider-databricks.recipient.Recipient"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/resources/recipient databricks_recipient}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.recipient.Recipient.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/recipient"

recipient.NewRecipient(scope Construct, id *string, config RecipientConfig) Recipient
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.recipient.RecipientConfig">RecipientConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.recipient.Recipient.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.recipient.Recipient.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.recipient.Recipient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.recipient.RecipientConfig">RecipientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.putIpAccessList">PutIpAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.putTokens">PutTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.resetDataRecipientGlobalMetastoreId">ResetDataRecipientGlobalMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.resetIpAccessList">ResetIpAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.resetSharingCode">ResetSharingCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.resetTokens">ResetTokens</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.recipient.Recipient.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.recipient.Recipient.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.recipient.Recipient.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.recipient.Recipient.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.recipient.Recipient.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.recipient.Recipient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.recipient.Recipient.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.recipient.Recipient.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.recipient.Recipient.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.recipient.Recipient.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipient.Recipient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutIpAccessList` <a name="PutIpAccessList" id="@cdktf/provider-databricks.recipient.Recipient.putIpAccessList"></a>

```go
func PutIpAccessList(value RecipientIpAccessListStruct)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.recipient.Recipient.putIpAccessList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStruct">RecipientIpAccessListStruct</a>

---

##### `PutTokens` <a name="PutTokens" id="@cdktf/provider-databricks.recipient.Recipient.putTokens"></a>

```go
func PutTokens(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.recipient.Recipient.putTokens.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.recipient.Recipient.resetComment"></a>

```go
func ResetComment()
```

##### `ResetDataRecipientGlobalMetastoreId` <a name="ResetDataRecipientGlobalMetastoreId" id="@cdktf/provider-databricks.recipient.Recipient.resetDataRecipientGlobalMetastoreId"></a>

```go
func ResetDataRecipientGlobalMetastoreId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.recipient.Recipient.resetId"></a>

```go
func ResetId()
```

##### `ResetIpAccessList` <a name="ResetIpAccessList" id="@cdktf/provider-databricks.recipient.Recipient.resetIpAccessList"></a>

```go
func ResetIpAccessList()
```

##### `ResetSharingCode` <a name="ResetSharingCode" id="@cdktf/provider-databricks.recipient.Recipient.resetSharingCode"></a>

```go
func ResetSharingCode()
```

##### `ResetTokens` <a name="ResetTokens" id="@cdktf/provider-databricks.recipient.Recipient.resetTokens"></a>

```go
func ResetTokens()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.recipient.Recipient.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/recipient"

recipient.Recipient_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.recipient.Recipient.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.recipient.Recipient.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/recipient"

recipient.Recipient_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.recipient.Recipient.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.recipient.Recipient.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/recipient"

recipient.Recipient_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.recipient.Recipient.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.ipAccessList">IpAccessList</a></code> | <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference">RecipientIpAccessListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.tokens">Tokens</a></code> | <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensList">RecipientTokensList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.authenticationTypeInput">AuthenticationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.dataRecipientGlobalMetastoreIdInput">DataRecipientGlobalMetastoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.ipAccessListInput">IpAccessListInput</a></code> | <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStruct">RecipientIpAccessListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.sharingCodeInput">SharingCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.tokensInput">TokensInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.authenticationType">AuthenticationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.dataRecipientGlobalMetastoreId">DataRecipientGlobalMetastoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.sharingCode">SharingCode</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.recipient.Recipient.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.recipient.Recipient.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.recipient.Recipient.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.recipient.Recipient.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.recipient.Recipient.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.recipient.Recipient.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.recipient.Recipient.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.recipient.Recipient.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.recipient.Recipient.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.recipient.Recipient.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.recipient.Recipient.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.recipient.Recipient.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.recipient.Recipient.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.recipient.Recipient.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IpAccessList`<sup>Required</sup> <a name="IpAccessList" id="@cdktf/provider-databricks.recipient.Recipient.property.ipAccessList"></a>

```go
func IpAccessList() RecipientIpAccessListStructOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference">RecipientIpAccessListStructOutputReference</a>

---

##### `Tokens`<sup>Required</sup> <a name="Tokens" id="@cdktf/provider-databricks.recipient.Recipient.property.tokens"></a>

```go
func Tokens() RecipientTokensList
```

- *Type:* <a href="#@cdktf/provider-databricks.recipient.RecipientTokensList">RecipientTokensList</a>

---

##### `AuthenticationTypeInput`<sup>Optional</sup> <a name="AuthenticationTypeInput" id="@cdktf/provider-databricks.recipient.Recipient.property.authenticationTypeInput"></a>

```go
func AuthenticationTypeInput() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.recipient.Recipient.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `DataRecipientGlobalMetastoreIdInput`<sup>Optional</sup> <a name="DataRecipientGlobalMetastoreIdInput" id="@cdktf/provider-databricks.recipient.Recipient.property.dataRecipientGlobalMetastoreIdInput"></a>

```go
func DataRecipientGlobalMetastoreIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.recipient.Recipient.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpAccessListInput`<sup>Optional</sup> <a name="IpAccessListInput" id="@cdktf/provider-databricks.recipient.Recipient.property.ipAccessListInput"></a>

```go
func IpAccessListInput() RecipientIpAccessListStruct
```

- *Type:* <a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStruct">RecipientIpAccessListStruct</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.recipient.Recipient.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SharingCodeInput`<sup>Optional</sup> <a name="SharingCodeInput" id="@cdktf/provider-databricks.recipient.Recipient.property.sharingCodeInput"></a>

```go
func SharingCodeInput() *string
```

- *Type:* *string

---

##### `TokensInput`<sup>Optional</sup> <a name="TokensInput" id="@cdktf/provider-databricks.recipient.Recipient.property.tokensInput"></a>

```go
func TokensInput() interface{}
```

- *Type:* interface{}

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktf/provider-databricks.recipient.Recipient.property.authenticationType"></a>

```go
func AuthenticationType() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.recipient.Recipient.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `DataRecipientGlobalMetastoreId`<sup>Required</sup> <a name="DataRecipientGlobalMetastoreId" id="@cdktf/provider-databricks.recipient.Recipient.property.dataRecipientGlobalMetastoreId"></a>

```go
func DataRecipientGlobalMetastoreId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.recipient.Recipient.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.recipient.Recipient.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SharingCode`<sup>Required</sup> <a name="SharingCode" id="@cdktf/provider-databricks.recipient.Recipient.property.sharingCode"></a>

```go
func SharingCode() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.recipient.Recipient.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RecipientConfig <a name="RecipientConfig" id="@cdktf/provider-databricks.recipient.RecipientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.recipient.RecipientConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/recipient"

&recipient.RecipientConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AuthenticationType: *string,
	Name: *string,
	Comment: *string,
	DataRecipientGlobalMetastoreId: *string,
	Id: *string,
	IpAccessList: github.com/cdktf/cdktf-provider-databricks-go/databricks.recipient.RecipientIpAccessListStruct,
	SharingCode: *string,
	Tokens: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientConfig.property.authenticationType">AuthenticationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/resources/recipient#authentication_type Recipient#authentication_type}. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/resources/recipient#name Recipient#name}. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientConfig.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/resources/recipient#comment Recipient#comment}. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientConfig.property.dataRecipientGlobalMetastoreId">DataRecipientGlobalMetastoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/resources/recipient#data_recipient_global_metastore_id Recipient#data_recipient_global_metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/resources/recipient#id Recipient#id}. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientConfig.property.ipAccessList">IpAccessList</a></code> | <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStruct">RecipientIpAccessListStruct</a></code> | ip_access_list block. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientConfig.property.sharingCode">SharingCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/resources/recipient#sharing_code Recipient#sharing_code}. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientConfig.property.tokens">Tokens</a></code> | <code>interface{}</code> | tokens block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.recipient.RecipientConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.recipient.RecipientConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.recipient.RecipientConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.recipient.RecipientConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.recipient.RecipientConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.recipient.RecipientConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.recipient.RecipientConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktf/provider-databricks.recipient.RecipientConfig.property.authenticationType"></a>

```go
AuthenticationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/resources/recipient#authentication_type Recipient#authentication_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.recipient.RecipientConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/resources/recipient#name Recipient#name}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.recipient.RecipientConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/resources/recipient#comment Recipient#comment}.

---

##### `DataRecipientGlobalMetastoreId`<sup>Optional</sup> <a name="DataRecipientGlobalMetastoreId" id="@cdktf/provider-databricks.recipient.RecipientConfig.property.dataRecipientGlobalMetastoreId"></a>

```go
DataRecipientGlobalMetastoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/resources/recipient#data_recipient_global_metastore_id Recipient#data_recipient_global_metastore_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.recipient.RecipientConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/resources/recipient#id Recipient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAccessList`<sup>Optional</sup> <a name="IpAccessList" id="@cdktf/provider-databricks.recipient.RecipientConfig.property.ipAccessList"></a>

```go
IpAccessList RecipientIpAccessListStruct
```

- *Type:* <a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStruct">RecipientIpAccessListStruct</a>

ip_access_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/resources/recipient#ip_access_list Recipient#ip_access_list}

---

##### `SharingCode`<sup>Optional</sup> <a name="SharingCode" id="@cdktf/provider-databricks.recipient.RecipientConfig.property.sharingCode"></a>

```go
SharingCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/resources/recipient#sharing_code Recipient#sharing_code}.

---

##### `Tokens`<sup>Optional</sup> <a name="Tokens" id="@cdktf/provider-databricks.recipient.RecipientConfig.property.tokens"></a>

```go
Tokens interface{}
```

- *Type:* interface{}

tokens block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/resources/recipient#tokens Recipient#tokens}

---

### RecipientIpAccessListStruct <a name="RecipientIpAccessListStruct" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStruct.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/recipient"

&recipient.RecipientIpAccessListStruct {
	AllowedIpAddresses: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStruct.property.allowedIpAddresses">AllowedIpAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/resources/recipient#allowed_ip_addresses Recipient#allowed_ip_addresses}. |

---

##### `AllowedIpAddresses`<sup>Required</sup> <a name="AllowedIpAddresses" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStruct.property.allowedIpAddresses"></a>

```go
AllowedIpAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/resources/recipient#allowed_ip_addresses Recipient#allowed_ip_addresses}.

---

### RecipientTokens <a name="RecipientTokens" id="@cdktf/provider-databricks.recipient.RecipientTokens"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.recipient.RecipientTokens.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/recipient"

&recipient.RecipientTokens {
	ActivationUrl: *string,
	CreatedAt: *f64,
	CreatedBy: *string,
	ExpirationTime: *f64,
	Id: *string,
	UpdatedAt: *f64,
	UpdatedBy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokens.property.activationUrl">ActivationUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/resources/recipient#activation_url Recipient#activation_url}. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokens.property.createdAt">CreatedAt</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/resources/recipient#created_at Recipient#created_at}. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokens.property.createdBy">CreatedBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/resources/recipient#created_by Recipient#created_by}. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokens.property.expirationTime">ExpirationTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/resources/recipient#expiration_time Recipient#expiration_time}. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokens.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/resources/recipient#id Recipient#id}. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokens.property.updatedAt">UpdatedAt</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/resources/recipient#updated_at Recipient#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokens.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/resources/recipient#updated_by Recipient#updated_by}. |

---

##### `ActivationUrl`<sup>Optional</sup> <a name="ActivationUrl" id="@cdktf/provider-databricks.recipient.RecipientTokens.property.activationUrl"></a>

```go
ActivationUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/resources/recipient#activation_url Recipient#activation_url}.

---

##### `CreatedAt`<sup>Optional</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.recipient.RecipientTokens.property.createdAt"></a>

```go
CreatedAt *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/resources/recipient#created_at Recipient#created_at}.

---

##### `CreatedBy`<sup>Optional</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.recipient.RecipientTokens.property.createdBy"></a>

```go
CreatedBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/resources/recipient#created_by Recipient#created_by}.

---

##### `ExpirationTime`<sup>Optional</sup> <a name="ExpirationTime" id="@cdktf/provider-databricks.recipient.RecipientTokens.property.expirationTime"></a>

```go
ExpirationTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/resources/recipient#expiration_time Recipient#expiration_time}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.recipient.RecipientTokens.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/resources/recipient#id Recipient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `UpdatedAt`<sup>Optional</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.recipient.RecipientTokens.property.updatedAt"></a>

```go
UpdatedAt *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/resources/recipient#updated_at Recipient#updated_at}.

---

##### `UpdatedBy`<sup>Optional</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.recipient.RecipientTokens.property.updatedBy"></a>

```go
UpdatedBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.21.0/docs/resources/recipient#updated_by Recipient#updated_by}.

---

## Classes <a name="Classes" id="Classes"></a>

### RecipientIpAccessListStructOutputReference <a name="RecipientIpAccessListStructOutputReference" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/recipient"

recipient.NewRecipientIpAccessListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RecipientIpAccessListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.property.allowedIpAddressesInput">AllowedIpAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.property.allowedIpAddresses">AllowedIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStruct">RecipientIpAccessListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedIpAddressesInput`<sup>Optional</sup> <a name="AllowedIpAddressesInput" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.property.allowedIpAddressesInput"></a>

```go
func AllowedIpAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedIpAddresses`<sup>Required</sup> <a name="AllowedIpAddresses" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.property.allowedIpAddresses"></a>

```go
func AllowedIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() RecipientIpAccessListStruct
```

- *Type:* <a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStruct">RecipientIpAccessListStruct</a>

---


### RecipientTokensList <a name="RecipientTokensList" id="@cdktf/provider-databricks.recipient.RecipientTokensList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.recipient.RecipientTokensList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/recipient"

recipient.NewRecipientTokensList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RecipientTokensList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.recipient.RecipientTokensList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.recipient.RecipientTokensList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.recipient.RecipientTokensList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.recipient.RecipientTokensList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.recipient.RecipientTokensList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.recipient.RecipientTokensList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.recipient.RecipientTokensList.get"></a>

```go
func Get(index *f64) RecipientTokensOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.recipient.RecipientTokensList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.recipient.RecipientTokensList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.recipient.RecipientTokensList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.recipient.RecipientTokensList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RecipientTokensOutputReference <a name="RecipientTokensOutputReference" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/recipient"

recipient.NewRecipientTokensOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RecipientTokensOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.resetActivationUrl">ResetActivationUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.resetCreatedAt">ResetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.resetCreatedBy">ResetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.resetExpirationTime">ResetExpirationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.resetUpdatedAt">ResetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.resetUpdatedBy">ResetUpdatedBy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActivationUrl` <a name="ResetActivationUrl" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.resetActivationUrl"></a>

```go
func ResetActivationUrl()
```

##### `ResetCreatedAt` <a name="ResetCreatedAt" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.resetCreatedAt"></a>

```go
func ResetCreatedAt()
```

##### `ResetCreatedBy` <a name="ResetCreatedBy" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.resetCreatedBy"></a>

```go
func ResetCreatedBy()
```

##### `ResetExpirationTime` <a name="ResetExpirationTime" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.resetExpirationTime"></a>

```go
func ResetExpirationTime()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetUpdatedAt` <a name="ResetUpdatedAt" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.resetUpdatedAt"></a>

```go
func ResetUpdatedAt()
```

##### `ResetUpdatedBy` <a name="ResetUpdatedBy" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.resetUpdatedBy"></a>

```go
func ResetUpdatedBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.activationUrlInput">ActivationUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.createdAtInput">CreatedAtInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.createdByInput">CreatedByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.expirationTimeInput">ExpirationTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.updatedAtInput">UpdatedAtInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.updatedByInput">UpdatedByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.activationUrl">ActivationUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.createdAt">CreatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.expirationTime">ExpirationTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActivationUrlInput`<sup>Optional</sup> <a name="ActivationUrlInput" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.activationUrlInput"></a>

```go
func ActivationUrlInput() *string
```

- *Type:* *string

---

##### `CreatedAtInput`<sup>Optional</sup> <a name="CreatedAtInput" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.createdAtInput"></a>

```go
func CreatedAtInput() *f64
```

- *Type:* *f64

---

##### `CreatedByInput`<sup>Optional</sup> <a name="CreatedByInput" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.createdByInput"></a>

```go
func CreatedByInput() *string
```

- *Type:* *string

---

##### `ExpirationTimeInput`<sup>Optional</sup> <a name="ExpirationTimeInput" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.expirationTimeInput"></a>

```go
func ExpirationTimeInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `UpdatedAtInput`<sup>Optional</sup> <a name="UpdatedAtInput" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.updatedAtInput"></a>

```go
func UpdatedAtInput() *f64
```

- *Type:* *f64

---

##### `UpdatedByInput`<sup>Optional</sup> <a name="UpdatedByInput" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.updatedByInput"></a>

```go
func UpdatedByInput() *string
```

- *Type:* *string

---

##### `ActivationUrl`<sup>Required</sup> <a name="ActivationUrl" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.activationUrl"></a>

```go
func ActivationUrl() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.createdAt"></a>

```go
func CreatedAt() *f64
```

- *Type:* *f64

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `ExpirationTime`<sup>Required</sup> <a name="ExpirationTime" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.expirationTime"></a>

```go
func ExpirationTime() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *f64
```

- *Type:* *f64

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



