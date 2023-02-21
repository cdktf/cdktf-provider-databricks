# `mwsCustomerManagedKeys` Submodule <a name="`mwsCustomerManagedKeys` Submodule" id="@cdktf/provider-databricks.mwsCustomerManagedKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsCustomerManagedKeys <a name="MwsCustomerManagedKeys" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys"></a>

Represents a {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys databricks_mws_customer_managed_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwscustomermanagedkeys"

mwscustomermanagedkeys.NewMwsCustomerManagedKeys(scope Construct, id *string, config MwsCustomerManagedKeysConfig) MwsCustomerManagedKeys
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig">MwsCustomerManagedKeysConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig">MwsCustomerManagedKeysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.putAwsKeyInfo">PutAwsKeyInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetCreationTime">ResetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetCustomerManagedKeyId">ResetCustomerManagedKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAwsKeyInfo` <a name="PutAwsKeyInfo" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.putAwsKeyInfo"></a>

```go
func PutAwsKeyInfo(value MwsCustomerManagedKeysAwsKeyInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.putAwsKeyInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo">MwsCustomerManagedKeysAwsKeyInfo</a>

---

##### `ResetCreationTime` <a name="ResetCreationTime" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetCreationTime"></a>

```go
func ResetCreationTime()
```

##### `ResetCustomerManagedKeyId` <a name="ResetCustomerManagedKeyId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetCustomerManagedKeyId"></a>

```go
func ResetCustomerManagedKeyId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwscustomermanagedkeys"

mwscustomermanagedkeys.MwsCustomerManagedKeys_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwscustomermanagedkeys"

mwscustomermanagedkeys.MwsCustomerManagedKeys_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwscustomermanagedkeys"

mwscustomermanagedkeys.MwsCustomerManagedKeys_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.awsKeyInfo">AwsKeyInfo</a></code> | <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference">MwsCustomerManagedKeysAwsKeyInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.awsKeyInfoInput">AwsKeyInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo">MwsCustomerManagedKeysAwsKeyInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.creationTimeInput">CreationTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.customerManagedKeyIdInput">CustomerManagedKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.useCasesInput">UseCasesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.creationTime">CreationTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.customerManagedKeyId">CustomerManagedKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.useCases">UseCases</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AwsKeyInfo`<sup>Required</sup> <a name="AwsKeyInfo" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.awsKeyInfo"></a>

```go
func AwsKeyInfo() MwsCustomerManagedKeysAwsKeyInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference">MwsCustomerManagedKeysAwsKeyInfoOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AwsKeyInfoInput`<sup>Optional</sup> <a name="AwsKeyInfoInput" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.awsKeyInfoInput"></a>

```go
func AwsKeyInfoInput() MwsCustomerManagedKeysAwsKeyInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo">MwsCustomerManagedKeysAwsKeyInfo</a>

---

##### `CreationTimeInput`<sup>Optional</sup> <a name="CreationTimeInput" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.creationTimeInput"></a>

```go
func CreationTimeInput() *f64
```

- *Type:* *f64

---

##### `CustomerManagedKeyIdInput`<sup>Optional</sup> <a name="CustomerManagedKeyIdInput" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.customerManagedKeyIdInput"></a>

```go
func CustomerManagedKeyIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `UseCasesInput`<sup>Optional</sup> <a name="UseCasesInput" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.useCasesInput"></a>

```go
func UseCasesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.creationTime"></a>

```go
func CreationTime() *f64
```

- *Type:* *f64

---

##### `CustomerManagedKeyId`<sup>Required</sup> <a name="CustomerManagedKeyId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.customerManagedKeyId"></a>

```go
func CustomerManagedKeyId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `UseCases`<sup>Required</sup> <a name="UseCases" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.useCases"></a>

```go
func UseCases() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MwsCustomerManagedKeysAwsKeyInfo <a name="MwsCustomerManagedKeysAwsKeyInfo" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwscustomermanagedkeys"

&mwscustomermanagedkeys.MwsCustomerManagedKeysAwsKeyInfo {
	KeyAlias: *string,
	KeyArn: *string,
	KeyRegion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo.property.keyAlias">KeyAlias</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys#key_alias MwsCustomerManagedKeys#key_alias}. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo.property.keyArn">KeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys#key_arn MwsCustomerManagedKeys#key_arn}. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo.property.keyRegion">KeyRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys#key_region MwsCustomerManagedKeys#key_region}. |

---

##### `KeyAlias`<sup>Required</sup> <a name="KeyAlias" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo.property.keyAlias"></a>

```go
KeyAlias *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys#key_alias MwsCustomerManagedKeys#key_alias}.

---

##### `KeyArn`<sup>Required</sup> <a name="KeyArn" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo.property.keyArn"></a>

```go
KeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys#key_arn MwsCustomerManagedKeys#key_arn}.

---

##### `KeyRegion`<sup>Optional</sup> <a name="KeyRegion" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo.property.keyRegion"></a>

```go
KeyRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys#key_region MwsCustomerManagedKeys#key_region}.

---

### MwsCustomerManagedKeysConfig <a name="MwsCustomerManagedKeysConfig" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwscustomermanagedkeys"

&mwscustomermanagedkeys.MwsCustomerManagedKeysConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	AwsKeyInfo: github.com/cdktf/cdktf-provider-databricks-go/databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo,
	UseCases: *[]*string,
	CreationTime: *f64,
	CustomerManagedKeyId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys#account_id MwsCustomerManagedKeys#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.awsKeyInfo">AwsKeyInfo</a></code> | <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo">MwsCustomerManagedKeysAwsKeyInfo</a></code> | aws_key_info block. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.useCases">UseCases</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys#use_cases MwsCustomerManagedKeys#use_cases}. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.creationTime">CreationTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys#creation_time MwsCustomerManagedKeys#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.customerManagedKeyId">CustomerManagedKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys#customer_managed_key_id MwsCustomerManagedKeys#customer_managed_key_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys#id MwsCustomerManagedKeys#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys#account_id MwsCustomerManagedKeys#account_id}.

---

##### `AwsKeyInfo`<sup>Required</sup> <a name="AwsKeyInfo" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.awsKeyInfo"></a>

```go
AwsKeyInfo MwsCustomerManagedKeysAwsKeyInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo">MwsCustomerManagedKeysAwsKeyInfo</a>

aws_key_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys#aws_key_info MwsCustomerManagedKeys#aws_key_info}

---

##### `UseCases`<sup>Required</sup> <a name="UseCases" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.useCases"></a>

```go
UseCases *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys#use_cases MwsCustomerManagedKeys#use_cases}.

---

##### `CreationTime`<sup>Optional</sup> <a name="CreationTime" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.creationTime"></a>

```go
CreationTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys#creation_time MwsCustomerManagedKeys#creation_time}.

---

##### `CustomerManagedKeyId`<sup>Optional</sup> <a name="CustomerManagedKeyId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.customerManagedKeyId"></a>

```go
CustomerManagedKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys#customer_managed_key_id MwsCustomerManagedKeys#customer_managed_key_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys#id MwsCustomerManagedKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### MwsCustomerManagedKeysAwsKeyInfoOutputReference <a name="MwsCustomerManagedKeysAwsKeyInfoOutputReference" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwscustomermanagedkeys"

mwscustomermanagedkeys.NewMwsCustomerManagedKeysAwsKeyInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MwsCustomerManagedKeysAwsKeyInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.resetKeyRegion">ResetKeyRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyRegion` <a name="ResetKeyRegion" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.resetKeyRegion"></a>

```go
func ResetKeyRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyAliasInput">KeyAliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyArnInput">KeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyRegionInput">KeyRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyAlias">KeyAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyArn">KeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyRegion">KeyRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo">MwsCustomerManagedKeysAwsKeyInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyAliasInput`<sup>Optional</sup> <a name="KeyAliasInput" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyAliasInput"></a>

```go
func KeyAliasInput() *string
```

- *Type:* *string

---

##### `KeyArnInput`<sup>Optional</sup> <a name="KeyArnInput" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyArnInput"></a>

```go
func KeyArnInput() *string
```

- *Type:* *string

---

##### `KeyRegionInput`<sup>Optional</sup> <a name="KeyRegionInput" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyRegionInput"></a>

```go
func KeyRegionInput() *string
```

- *Type:* *string

---

##### `KeyAlias`<sup>Required</sup> <a name="KeyAlias" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyAlias"></a>

```go
func KeyAlias() *string
```

- *Type:* *string

---

##### `KeyArn`<sup>Required</sup> <a name="KeyArn" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyArn"></a>

```go
func KeyArn() *string
```

- *Type:* *string

---

##### `KeyRegion`<sup>Required</sup> <a name="KeyRegion" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyRegion"></a>

```go
func KeyRegion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() MwsCustomerManagedKeysAwsKeyInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo">MwsCustomerManagedKeysAwsKeyInfo</a>

---


