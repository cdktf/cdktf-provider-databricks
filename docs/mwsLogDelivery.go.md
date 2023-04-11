# `mwsLogDelivery` Submodule <a name="`mwsLogDelivery` Submodule" id="@cdktf/provider-databricks.mwsLogDelivery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsLogDelivery <a name="MwsLogDelivery" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery"></a>

Represents a {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery databricks_mws_log_delivery}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v6/mwslogdelivery"

mwslogdelivery.NewMwsLogDelivery(scope Construct, id *string, config MwsLogDeliveryConfig) MwsLogDelivery
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig">MwsLogDeliveryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig">MwsLogDeliveryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetConfigId">ResetConfigId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetConfigName">ResetConfigName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetDeliveryPathPrefix">ResetDeliveryPathPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetDeliveryStartTime">ResetDeliveryStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetWorkspaceIdsFilter">ResetWorkspaceIdsFilter</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetConfigId` <a name="ResetConfigId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetConfigId"></a>

```go
func ResetConfigId()
```

##### `ResetConfigName` <a name="ResetConfigName" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetConfigName"></a>

```go
func ResetConfigName()
```

##### `ResetDeliveryPathPrefix` <a name="ResetDeliveryPathPrefix" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetDeliveryPathPrefix"></a>

```go
func ResetDeliveryPathPrefix()
```

##### `ResetDeliveryStartTime` <a name="ResetDeliveryStartTime" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetDeliveryStartTime"></a>

```go
func ResetDeliveryStartTime()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetId"></a>

```go
func ResetId()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetWorkspaceIdsFilter` <a name="ResetWorkspaceIdsFilter" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetWorkspaceIdsFilter"></a>

```go
func ResetWorkspaceIdsFilter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v6/mwslogdelivery"

mwslogdelivery.MwsLogDelivery_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v6/mwslogdelivery"

mwslogdelivery.MwsLogDelivery_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v6/mwslogdelivery"

mwslogdelivery.MwsLogDelivery_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.configIdInput">ConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.configNameInput">ConfigNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.credentialsIdInput">CredentialsIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.deliveryPathPrefixInput">DeliveryPathPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.deliveryStartTimeInput">DeliveryStartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.logTypeInput">LogTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.outputFormatInput">OutputFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.storageConfigurationIdInput">StorageConfigurationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.workspaceIdsFilterInput">WorkspaceIdsFilterInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.configId">ConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.configName">ConfigName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.credentialsId">CredentialsId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.deliveryPathPrefix">DeliveryPathPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.deliveryStartTime">DeliveryStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.logType">LogType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.outputFormat">OutputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.storageConfigurationId">StorageConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.workspaceIdsFilter">WorkspaceIdsFilter</a></code> | <code>*[]*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `ConfigIdInput`<sup>Optional</sup> <a name="ConfigIdInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.configIdInput"></a>

```go
func ConfigIdInput() *string
```

- *Type:* *string

---

##### `ConfigNameInput`<sup>Optional</sup> <a name="ConfigNameInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.configNameInput"></a>

```go
func ConfigNameInput() *string
```

- *Type:* *string

---

##### `CredentialsIdInput`<sup>Optional</sup> <a name="CredentialsIdInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.credentialsIdInput"></a>

```go
func CredentialsIdInput() *string
```

- *Type:* *string

---

##### `DeliveryPathPrefixInput`<sup>Optional</sup> <a name="DeliveryPathPrefixInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.deliveryPathPrefixInput"></a>

```go
func DeliveryPathPrefixInput() *string
```

- *Type:* *string

---

##### `DeliveryStartTimeInput`<sup>Optional</sup> <a name="DeliveryStartTimeInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.deliveryStartTimeInput"></a>

```go
func DeliveryStartTimeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogTypeInput`<sup>Optional</sup> <a name="LogTypeInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.logTypeInput"></a>

```go
func LogTypeInput() *string
```

- *Type:* *string

---

##### `OutputFormatInput`<sup>Optional</sup> <a name="OutputFormatInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.outputFormatInput"></a>

```go
func OutputFormatInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `StorageConfigurationIdInput`<sup>Optional</sup> <a name="StorageConfigurationIdInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.storageConfigurationIdInput"></a>

```go
func StorageConfigurationIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceIdsFilterInput`<sup>Optional</sup> <a name="WorkspaceIdsFilterInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.workspaceIdsFilterInput"></a>

```go
func WorkspaceIdsFilterInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.configId"></a>

```go
func ConfigId() *string
```

- *Type:* *string

---

##### `ConfigName`<sup>Required</sup> <a name="ConfigName" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.configName"></a>

```go
func ConfigName() *string
```

- *Type:* *string

---

##### `CredentialsId`<sup>Required</sup> <a name="CredentialsId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.credentialsId"></a>

```go
func CredentialsId() *string
```

- *Type:* *string

---

##### `DeliveryPathPrefix`<sup>Required</sup> <a name="DeliveryPathPrefix" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.deliveryPathPrefix"></a>

```go
func DeliveryPathPrefix() *string
```

- *Type:* *string

---

##### `DeliveryStartTime`<sup>Required</sup> <a name="DeliveryStartTime" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.deliveryStartTime"></a>

```go
func DeliveryStartTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.logType"></a>

```go
func LogType() *string
```

- *Type:* *string

---

##### `OutputFormat`<sup>Required</sup> <a name="OutputFormat" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.outputFormat"></a>

```go
func OutputFormat() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StorageConfigurationId`<sup>Required</sup> <a name="StorageConfigurationId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.storageConfigurationId"></a>

```go
func StorageConfigurationId() *string
```

- *Type:* *string

---

##### `WorkspaceIdsFilter`<sup>Required</sup> <a name="WorkspaceIdsFilter" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.workspaceIdsFilter"></a>

```go
func WorkspaceIdsFilter() *[]*f64
```

- *Type:* *[]*f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MwsLogDeliveryConfig <a name="MwsLogDeliveryConfig" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v6/mwslogdelivery"

&mwslogdelivery.MwsLogDeliveryConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	CredentialsId: *string,
	LogType: *string,
	OutputFormat: *string,
	StorageConfigurationId: *string,
	ConfigId: *string,
	ConfigName: *string,
	DeliveryPathPrefix: *string,
	DeliveryStartTime: *string,
	Id: *string,
	Status: *string,
	WorkspaceIdsFilter: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery#account_id MwsLogDelivery#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.credentialsId">CredentialsId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery#credentials_id MwsLogDelivery#credentials_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.logType">LogType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery#log_type MwsLogDelivery#log_type}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.outputFormat">OutputFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery#output_format MwsLogDelivery#output_format}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.storageConfigurationId">StorageConfigurationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery#storage_configuration_id MwsLogDelivery#storage_configuration_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.configId">ConfigId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery#config_id MwsLogDelivery#config_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.configName">ConfigName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery#config_name MwsLogDelivery#config_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.deliveryPathPrefix">DeliveryPathPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery#delivery_path_prefix MwsLogDelivery#delivery_path_prefix}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.deliveryStartTime">DeliveryStartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery#delivery_start_time MwsLogDelivery#delivery_start_time}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery#id MwsLogDelivery#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery#status MwsLogDelivery#status}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.workspaceIdsFilter">WorkspaceIdsFilter</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery#workspace_ids_filter MwsLogDelivery#workspace_ids_filter}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery#account_id MwsLogDelivery#account_id}.

---

##### `CredentialsId`<sup>Required</sup> <a name="CredentialsId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.credentialsId"></a>

```go
CredentialsId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery#credentials_id MwsLogDelivery#credentials_id}.

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.logType"></a>

```go
LogType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery#log_type MwsLogDelivery#log_type}.

---

##### `OutputFormat`<sup>Required</sup> <a name="OutputFormat" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.outputFormat"></a>

```go
OutputFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery#output_format MwsLogDelivery#output_format}.

---

##### `StorageConfigurationId`<sup>Required</sup> <a name="StorageConfigurationId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.storageConfigurationId"></a>

```go
StorageConfigurationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery#storage_configuration_id MwsLogDelivery#storage_configuration_id}.

---

##### `ConfigId`<sup>Optional</sup> <a name="ConfigId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.configId"></a>

```go
ConfigId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery#config_id MwsLogDelivery#config_id}.

---

##### `ConfigName`<sup>Optional</sup> <a name="ConfigName" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.configName"></a>

```go
ConfigName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery#config_name MwsLogDelivery#config_name}.

---

##### `DeliveryPathPrefix`<sup>Optional</sup> <a name="DeliveryPathPrefix" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.deliveryPathPrefix"></a>

```go
DeliveryPathPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery#delivery_path_prefix MwsLogDelivery#delivery_path_prefix}.

---

##### `DeliveryStartTime`<sup>Optional</sup> <a name="DeliveryStartTime" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.deliveryStartTime"></a>

```go
DeliveryStartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery#delivery_start_time MwsLogDelivery#delivery_start_time}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery#id MwsLogDelivery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery#status MwsLogDelivery#status}.

---

##### `WorkspaceIdsFilter`<sup>Optional</sup> <a name="WorkspaceIdsFilter" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.workspaceIdsFilter"></a>

```go
WorkspaceIdsFilter *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_log_delivery#workspace_ids_filter MwsLogDelivery#workspace_ids_filter}.

---



