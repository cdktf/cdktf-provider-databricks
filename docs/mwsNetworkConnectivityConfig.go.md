# `mwsNetworkConnectivityConfig` Submodule <a name="`mwsNetworkConnectivityConfig` Submodule" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsNetworkConnectivityConfig <a name="MwsNetworkConnectivityConfig" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config databricks_mws_network_connectivity_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnetworkconnectivityconfig"

mwsnetworkconnectivityconfig.NewMwsNetworkConnectivityConfig(scope Construct, id *string, config MwsNetworkConnectivityConfigConfig) MwsNetworkConnectivityConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig">MwsNetworkConnectivityConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig">MwsNetworkConnectivityConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.putEgressConfig">PutEgressConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.resetCreationTime">ResetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.resetEgressConfig">ResetEgressConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.resetNetworkConnectivityConfigId">ResetNetworkConnectivityConfigId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.resetUpdatedTime">ResetUpdatedTime</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEgressConfig` <a name="PutEgressConfig" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.putEgressConfig"></a>

```go
func PutEgressConfig(value MwsNetworkConnectivityConfigEgressConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.putEgressConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfig">MwsNetworkConnectivityConfigEgressConfig</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetCreationTime` <a name="ResetCreationTime" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.resetCreationTime"></a>

```go
func ResetCreationTime()
```

##### `ResetEgressConfig` <a name="ResetEgressConfig" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.resetEgressConfig"></a>

```go
func ResetEgressConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetNetworkConnectivityConfigId` <a name="ResetNetworkConnectivityConfigId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.resetNetworkConnectivityConfigId"></a>

```go
func ResetNetworkConnectivityConfigId()
```

##### `ResetUpdatedTime` <a name="ResetUpdatedTime" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.resetUpdatedTime"></a>

```go
func ResetUpdatedTime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MwsNetworkConnectivityConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnetworkconnectivityconfig"

mwsnetworkconnectivityconfig.MwsNetworkConnectivityConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnetworkconnectivityconfig"

mwsnetworkconnectivityconfig.MwsNetworkConnectivityConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnetworkconnectivityconfig"

mwsnetworkconnectivityconfig.MwsNetworkConnectivityConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnetworkconnectivityconfig"

mwsnetworkconnectivityconfig.MwsNetworkConnectivityConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MwsNetworkConnectivityConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MwsNetworkConnectivityConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MwsNetworkConnectivityConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MwsNetworkConnectivityConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.egressConfig">EgressConfig</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference">MwsNetworkConnectivityConfigEgressConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.creationTimeInput">CreationTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.egressConfigInput">EgressConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfig">MwsNetworkConnectivityConfigEgressConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.networkConnectivityConfigIdInput">NetworkConnectivityConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.updatedTimeInput">UpdatedTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.creationTime">CreationTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.networkConnectivityConfigId">NetworkConnectivityConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.updatedTime">UpdatedTime</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EgressConfig`<sup>Required</sup> <a name="EgressConfig" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.egressConfig"></a>

```go
func EgressConfig() MwsNetworkConnectivityConfigEgressConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference">MwsNetworkConnectivityConfigEgressConfigOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `CreationTimeInput`<sup>Optional</sup> <a name="CreationTimeInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.creationTimeInput"></a>

```go
func CreationTimeInput() *f64
```

- *Type:* *f64

---

##### `EgressConfigInput`<sup>Optional</sup> <a name="EgressConfigInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.egressConfigInput"></a>

```go
func EgressConfigInput() MwsNetworkConnectivityConfigEgressConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfig">MwsNetworkConnectivityConfigEgressConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkConnectivityConfigIdInput`<sup>Optional</sup> <a name="NetworkConnectivityConfigIdInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.networkConnectivityConfigIdInput"></a>

```go
func NetworkConnectivityConfigIdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `UpdatedTimeInput`<sup>Optional</sup> <a name="UpdatedTimeInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.updatedTimeInput"></a>

```go
func UpdatedTimeInput() *f64
```

- *Type:* *f64

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.creationTime"></a>

```go
func CreationTime() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkConnectivityConfigId`<sup>Required</sup> <a name="NetworkConnectivityConfigId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.networkConnectivityConfigId"></a>

```go
func NetworkConnectivityConfigId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `UpdatedTime`<sup>Required</sup> <a name="UpdatedTime" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.updatedTime"></a>

```go
func UpdatedTime() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MwsNetworkConnectivityConfigConfig <a name="MwsNetworkConnectivityConfigConfig" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnetworkconnectivityconfig"

&mwsnetworkconnectivityconfig.MwsNetworkConnectivityConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Region: *string,
	AccountId: *string,
	CreationTime: *f64,
	EgressConfig: github.com/cdktf/cdktf-provider-databricks-go/databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfig,
	Id: *string,
	NetworkConnectivityConfigId: *string,
	UpdatedTime: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#name MwsNetworkConnectivityConfig#name}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#region MwsNetworkConnectivityConfig#region}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#account_id MwsNetworkConnectivityConfig#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.creationTime">CreationTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#creation_time MwsNetworkConnectivityConfig#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.egressConfig">EgressConfig</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfig">MwsNetworkConnectivityConfigEgressConfig</a></code> | egress_config block. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#id MwsNetworkConnectivityConfig#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.networkConnectivityConfigId">NetworkConnectivityConfigId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#network_connectivity_config_id MwsNetworkConnectivityConfig#network_connectivity_config_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.updatedTime">UpdatedTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#updated_time MwsNetworkConnectivityConfig#updated_time}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#name MwsNetworkConnectivityConfig#name}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#region MwsNetworkConnectivityConfig#region}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#account_id MwsNetworkConnectivityConfig#account_id}.

---

##### `CreationTime`<sup>Optional</sup> <a name="CreationTime" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.creationTime"></a>

```go
CreationTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#creation_time MwsNetworkConnectivityConfig#creation_time}.

---

##### `EgressConfig`<sup>Optional</sup> <a name="EgressConfig" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.egressConfig"></a>

```go
EgressConfig MwsNetworkConnectivityConfigEgressConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfig">MwsNetworkConnectivityConfigEgressConfig</a>

egress_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#egress_config MwsNetworkConnectivityConfig#egress_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#id MwsNetworkConnectivityConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NetworkConnectivityConfigId`<sup>Optional</sup> <a name="NetworkConnectivityConfigId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.networkConnectivityConfigId"></a>

```go
NetworkConnectivityConfigId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#network_connectivity_config_id MwsNetworkConnectivityConfig#network_connectivity_config_id}.

---

##### `UpdatedTime`<sup>Optional</sup> <a name="UpdatedTime" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.updatedTime"></a>

```go
UpdatedTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#updated_time MwsNetworkConnectivityConfig#updated_time}.

---

### MwsNetworkConnectivityConfigEgressConfig <a name="MwsNetworkConnectivityConfigEgressConfig" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnetworkconnectivityconfig"

&mwsnetworkconnectivityconfig.MwsNetworkConnectivityConfigEgressConfig {
	DefaultRules: github.com/cdktf/cdktf-provider-databricks-go/databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRules,
	TargetRules: github.com/cdktf/cdktf-provider-databricks-go/databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRules,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfig.property.defaultRules">DefaultRules</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRules">MwsNetworkConnectivityConfigEgressConfigDefaultRules</a></code> | default_rules block. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfig.property.targetRules">TargetRules</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRules">MwsNetworkConnectivityConfigEgressConfigTargetRules</a></code> | target_rules block. |

---

##### `DefaultRules`<sup>Optional</sup> <a name="DefaultRules" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfig.property.defaultRules"></a>

```go
DefaultRules MwsNetworkConnectivityConfigEgressConfigDefaultRules
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRules">MwsNetworkConnectivityConfigEgressConfigDefaultRules</a>

default_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#default_rules MwsNetworkConnectivityConfig#default_rules}

---

##### `TargetRules`<sup>Optional</sup> <a name="TargetRules" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfig.property.targetRules"></a>

```go
TargetRules MwsNetworkConnectivityConfigEgressConfigTargetRules
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRules">MwsNetworkConnectivityConfigEgressConfigTargetRules</a>

target_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#target_rules MwsNetworkConnectivityConfig#target_rules}

---

### MwsNetworkConnectivityConfigEgressConfigDefaultRules <a name="MwsNetworkConnectivityConfigEgressConfigDefaultRules" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnetworkconnectivityconfig"

&mwsnetworkconnectivityconfig.MwsNetworkConnectivityConfigEgressConfigDefaultRules {
	AwsStableIpRule: github.com/cdktf/cdktf-provider-databricks-go/databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule,
	AzureServiceEndpointRule: github.com/cdktf/cdktf-provider-databricks-go/databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRules.property.awsStableIpRule">AwsStableIpRule</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a></code> | aws_stable_ip_rule block. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRules.property.azureServiceEndpointRule">AzureServiceEndpointRule</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a></code> | azure_service_endpoint_rule block. |

---

##### `AwsStableIpRule`<sup>Optional</sup> <a name="AwsStableIpRule" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRules.property.awsStableIpRule"></a>

```go
AwsStableIpRule MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a>

aws_stable_ip_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#aws_stable_ip_rule MwsNetworkConnectivityConfig#aws_stable_ip_rule}

---

##### `AzureServiceEndpointRule`<sup>Optional</sup> <a name="AzureServiceEndpointRule" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRules.property.azureServiceEndpointRule"></a>

```go
AzureServiceEndpointRule MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a>

azure_service_endpoint_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#azure_service_endpoint_rule MwsNetworkConnectivityConfig#azure_service_endpoint_rule}

---

### MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule <a name="MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnetworkconnectivityconfig"

&mwsnetworkconnectivityconfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule {
	CidrBlocks: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule.property.cidrBlocks">CidrBlocks</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#cidr_blocks MwsNetworkConnectivityConfig#cidr_blocks}. |

---

##### `CidrBlocks`<sup>Optional</sup> <a name="CidrBlocks" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule.property.cidrBlocks"></a>

```go
CidrBlocks *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#cidr_blocks MwsNetworkConnectivityConfig#cidr_blocks}.

---

### MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule <a name="MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnetworkconnectivityconfig"

&mwsnetworkconnectivityconfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule {
	Subnets: *[]*string,
	TargetRegion: *string,
	TargetServices: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.subnets">Subnets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#subnets MwsNetworkConnectivityConfig#subnets}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.targetRegion">TargetRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#target_region MwsNetworkConnectivityConfig#target_region}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.targetServices">TargetServices</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#target_services MwsNetworkConnectivityConfig#target_services}. |

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.subnets"></a>

```go
Subnets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#subnets MwsNetworkConnectivityConfig#subnets}.

---

##### `TargetRegion`<sup>Optional</sup> <a name="TargetRegion" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.targetRegion"></a>

```go
TargetRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#target_region MwsNetworkConnectivityConfig#target_region}.

---

##### `TargetServices`<sup>Optional</sup> <a name="TargetServices" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.targetServices"></a>

```go
TargetServices *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#target_services MwsNetworkConnectivityConfig#target_services}.

---

### MwsNetworkConnectivityConfigEgressConfigTargetRules <a name="MwsNetworkConnectivityConfigEgressConfigTargetRules" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnetworkconnectivityconfig"

&mwsnetworkconnectivityconfig.MwsNetworkConnectivityConfigEgressConfigTargetRules {
	AzurePrivateEndpointRules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRules.property.azurePrivateEndpointRules">AzurePrivateEndpointRules</a></code> | <code>interface{}</code> | azure_private_endpoint_rules block. |

---

##### `AzurePrivateEndpointRules`<sup>Optional</sup> <a name="AzurePrivateEndpointRules" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRules.property.azurePrivateEndpointRules"></a>

```go
AzurePrivateEndpointRules interface{}
```

- *Type:* interface{}

azure_private_endpoint_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#azure_private_endpoint_rules MwsNetworkConnectivityConfig#azure_private_endpoint_rules}

---

### MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules <a name="MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnetworkconnectivityconfig"

&mwsnetworkconnectivityconfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules {
	ConnectionState: *string,
	CreationTime: *f64,
	Deactivated: interface{},
	DeactivatedAt: *f64,
	EndpointName: *string,
	GroupId: *string,
	NetworkConnectivityConfigId: *string,
	ResourceId: *string,
	RuleId: *string,
	UpdatedTime: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.connectionState">ConnectionState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#connection_state MwsNetworkConnectivityConfig#connection_state}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.creationTime">CreationTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#creation_time MwsNetworkConnectivityConfig#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.deactivated">Deactivated</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#deactivated MwsNetworkConnectivityConfig#deactivated}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.deactivatedAt">DeactivatedAt</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#deactivated_at MwsNetworkConnectivityConfig#deactivated_at}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.endpointName">EndpointName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#endpoint_name MwsNetworkConnectivityConfig#endpoint_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.groupId">GroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#group_id MwsNetworkConnectivityConfig#group_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.networkConnectivityConfigId">NetworkConnectivityConfigId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#network_connectivity_config_id MwsNetworkConnectivityConfig#network_connectivity_config_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.resourceId">ResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#resource_id MwsNetworkConnectivityConfig#resource_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.ruleId">RuleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#rule_id MwsNetworkConnectivityConfig#rule_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.updatedTime">UpdatedTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#updated_time MwsNetworkConnectivityConfig#updated_time}. |

---

##### `ConnectionState`<sup>Optional</sup> <a name="ConnectionState" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.connectionState"></a>

```go
ConnectionState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#connection_state MwsNetworkConnectivityConfig#connection_state}.

---

##### `CreationTime`<sup>Optional</sup> <a name="CreationTime" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.creationTime"></a>

```go
CreationTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#creation_time MwsNetworkConnectivityConfig#creation_time}.

---

##### `Deactivated`<sup>Optional</sup> <a name="Deactivated" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.deactivated"></a>

```go
Deactivated interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#deactivated MwsNetworkConnectivityConfig#deactivated}.

---

##### `DeactivatedAt`<sup>Optional</sup> <a name="DeactivatedAt" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.deactivatedAt"></a>

```go
DeactivatedAt *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#deactivated_at MwsNetworkConnectivityConfig#deactivated_at}.

---

##### `EndpointName`<sup>Optional</sup> <a name="EndpointName" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.endpointName"></a>

```go
EndpointName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#endpoint_name MwsNetworkConnectivityConfig#endpoint_name}.

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.groupId"></a>

```go
GroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#group_id MwsNetworkConnectivityConfig#group_id}.

---

##### `NetworkConnectivityConfigId`<sup>Optional</sup> <a name="NetworkConnectivityConfigId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.networkConnectivityConfigId"></a>

```go
NetworkConnectivityConfigId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#network_connectivity_config_id MwsNetworkConnectivityConfig#network_connectivity_config_id}.

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#resource_id MwsNetworkConnectivityConfig#resource_id}.

---

##### `RuleId`<sup>Optional</sup> <a name="RuleId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.ruleId"></a>

```go
RuleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#rule_id MwsNetworkConnectivityConfig#rule_id}.

---

##### `UpdatedTime`<sup>Optional</sup> <a name="UpdatedTime" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.updatedTime"></a>

```go
UpdatedTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.45.0/docs/resources/mws_network_connectivity_config#updated_time MwsNetworkConnectivityConfig#updated_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference <a name="MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnetworkconnectivityconfig"

mwsnetworkconnectivityconfig.NewMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.resetCidrBlocks">ResetCidrBlocks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrBlocks` <a name="ResetCidrBlocks" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.resetCidrBlocks"></a>

```go
func ResetCidrBlocks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.cidrBlocksInput">CidrBlocksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.cidrBlocks">CidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrBlocksInput`<sup>Optional</sup> <a name="CidrBlocksInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.cidrBlocksInput"></a>

```go
func CidrBlocksInput() *[]*string
```

- *Type:* *[]*string

---

##### `CidrBlocks`<sup>Required</sup> <a name="CidrBlocks" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.cidrBlocks"></a>

```go
func CidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a>

---


### MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference <a name="MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnetworkconnectivityconfig"

mwsnetworkconnectivityconfig.NewMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetSubnets">ResetSubnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetTargetRegion">ResetTargetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetTargetServices">ResetTargetServices</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetSubnets"></a>

```go
func ResetSubnets()
```

##### `ResetTargetRegion` <a name="ResetTargetRegion" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetTargetRegion"></a>

```go
func ResetTargetRegion()
```

##### `ResetTargetServices` <a name="ResetTargetServices" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetTargetServices"></a>

```go
func ResetTargetServices()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetRegionInput">TargetRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetServicesInput">TargetServicesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetRegion">TargetRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetServices">TargetServices</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.subnetsInput"></a>

```go
func SubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetRegionInput`<sup>Optional</sup> <a name="TargetRegionInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetRegionInput"></a>

```go
func TargetRegionInput() *string
```

- *Type:* *string

---

##### `TargetServicesInput`<sup>Optional</sup> <a name="TargetServicesInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetServicesInput"></a>

```go
func TargetServicesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `TargetRegion`<sup>Required</sup> <a name="TargetRegion" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetRegion"></a>

```go
func TargetRegion() *string
```

- *Type:* *string

---

##### `TargetServices`<sup>Required</sup> <a name="TargetServices" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetServices"></a>

```go
func TargetServices() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a>

---


### MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference <a name="MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnetworkconnectivityconfig"

mwsnetworkconnectivityconfig.NewMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAwsStableIpRule">PutAwsStableIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAzureServiceEndpointRule">PutAzureServiceEndpointRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resetAwsStableIpRule">ResetAwsStableIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resetAzureServiceEndpointRule">ResetAzureServiceEndpointRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsStableIpRule` <a name="PutAwsStableIpRule" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAwsStableIpRule"></a>

```go
func PutAwsStableIpRule(value MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAwsStableIpRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a>

---

##### `PutAzureServiceEndpointRule` <a name="PutAzureServiceEndpointRule" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAzureServiceEndpointRule"></a>

```go
func PutAzureServiceEndpointRule(value MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAzureServiceEndpointRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a>

---

##### `ResetAwsStableIpRule` <a name="ResetAwsStableIpRule" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resetAwsStableIpRule"></a>

```go
func ResetAwsStableIpRule()
```

##### `ResetAzureServiceEndpointRule` <a name="ResetAzureServiceEndpointRule" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resetAzureServiceEndpointRule"></a>

```go
func ResetAzureServiceEndpointRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.awsStableIpRule">AwsStableIpRule</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.azureServiceEndpointRule">AzureServiceEndpointRule</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.awsStableIpRuleInput">AwsStableIpRuleInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.azureServiceEndpointRuleInput">AzureServiceEndpointRuleInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRules">MwsNetworkConnectivityConfigEgressConfigDefaultRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsStableIpRule`<sup>Required</sup> <a name="AwsStableIpRule" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.awsStableIpRule"></a>

```go
func AwsStableIpRule() MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference</a>

---

##### `AzureServiceEndpointRule`<sup>Required</sup> <a name="AzureServiceEndpointRule" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.azureServiceEndpointRule"></a>

```go
func AzureServiceEndpointRule() MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference</a>

---

##### `AwsStableIpRuleInput`<sup>Optional</sup> <a name="AwsStableIpRuleInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.awsStableIpRuleInput"></a>

```go
func AwsStableIpRuleInput() MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a>

---

##### `AzureServiceEndpointRuleInput`<sup>Optional</sup> <a name="AzureServiceEndpointRuleInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.azureServiceEndpointRuleInput"></a>

```go
func AzureServiceEndpointRuleInput() MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() MwsNetworkConnectivityConfigEgressConfigDefaultRules
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRules">MwsNetworkConnectivityConfigEgressConfigDefaultRules</a>

---


### MwsNetworkConnectivityConfigEgressConfigOutputReference <a name="MwsNetworkConnectivityConfigEgressConfigOutputReference" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnetworkconnectivityconfig"

mwsnetworkconnectivityconfig.NewMwsNetworkConnectivityConfigEgressConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MwsNetworkConnectivityConfigEgressConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.putDefaultRules">PutDefaultRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.putTargetRules">PutTargetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.resetDefaultRules">ResetDefaultRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.resetTargetRules">ResetTargetRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDefaultRules` <a name="PutDefaultRules" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.putDefaultRules"></a>

```go
func PutDefaultRules(value MwsNetworkConnectivityConfigEgressConfigDefaultRules)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.putDefaultRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRules">MwsNetworkConnectivityConfigEgressConfigDefaultRules</a>

---

##### `PutTargetRules` <a name="PutTargetRules" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.putTargetRules"></a>

```go
func PutTargetRules(value MwsNetworkConnectivityConfigEgressConfigTargetRules)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.putTargetRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRules">MwsNetworkConnectivityConfigEgressConfigTargetRules</a>

---

##### `ResetDefaultRules` <a name="ResetDefaultRules" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.resetDefaultRules"></a>

```go
func ResetDefaultRules()
```

##### `ResetTargetRules` <a name="ResetTargetRules" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.resetTargetRules"></a>

```go
func ResetTargetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.property.defaultRules">DefaultRules</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference">MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.property.targetRules">TargetRules</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference">MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.property.defaultRulesInput">DefaultRulesInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRules">MwsNetworkConnectivityConfigEgressConfigDefaultRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.property.targetRulesInput">TargetRulesInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRules">MwsNetworkConnectivityConfigEgressConfigTargetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfig">MwsNetworkConnectivityConfigEgressConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultRules`<sup>Required</sup> <a name="DefaultRules" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.property.defaultRules"></a>

```go
func DefaultRules() MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference">MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference</a>

---

##### `TargetRules`<sup>Required</sup> <a name="TargetRules" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.property.targetRules"></a>

```go
func TargetRules() MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference">MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference</a>

---

##### `DefaultRulesInput`<sup>Optional</sup> <a name="DefaultRulesInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.property.defaultRulesInput"></a>

```go
func DefaultRulesInput() MwsNetworkConnectivityConfigEgressConfigDefaultRules
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRules">MwsNetworkConnectivityConfigEgressConfigDefaultRules</a>

---

##### `TargetRulesInput`<sup>Optional</sup> <a name="TargetRulesInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.property.targetRulesInput"></a>

```go
func TargetRulesInput() MwsNetworkConnectivityConfigEgressConfigTargetRules
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRules">MwsNetworkConnectivityConfigEgressConfigTargetRules</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() MwsNetworkConnectivityConfigEgressConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfig">MwsNetworkConnectivityConfigEgressConfig</a>

---


### MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList <a name="MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnetworkconnectivityconfig"

mwsnetworkconnectivityconfig.NewMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.get"></a>

```go
func Get(index *f64) MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference <a name="MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnetworkconnectivityconfig"

mwsnetworkconnectivityconfig.NewMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetConnectionState">ResetConnectionState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetCreationTime">ResetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetDeactivated">ResetDeactivated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetDeactivatedAt">ResetDeactivatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetEndpointName">ResetEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetNetworkConnectivityConfigId">ResetNetworkConnectivityConfigId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetResourceId">ResetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetRuleId">ResetRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetUpdatedTime">ResetUpdatedTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionState` <a name="ResetConnectionState" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetConnectionState"></a>

```go
func ResetConnectionState()
```

##### `ResetCreationTime` <a name="ResetCreationTime" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetCreationTime"></a>

```go
func ResetCreationTime()
```

##### `ResetDeactivated` <a name="ResetDeactivated" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetDeactivated"></a>

```go
func ResetDeactivated()
```

##### `ResetDeactivatedAt` <a name="ResetDeactivatedAt" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetDeactivatedAt"></a>

```go
func ResetDeactivatedAt()
```

##### `ResetEndpointName` <a name="ResetEndpointName" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetEndpointName"></a>

```go
func ResetEndpointName()
```

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetGroupId"></a>

```go
func ResetGroupId()
```

##### `ResetNetworkConnectivityConfigId` <a name="ResetNetworkConnectivityConfigId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetNetworkConnectivityConfigId"></a>

```go
func ResetNetworkConnectivityConfigId()
```

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetResourceId"></a>

```go
func ResetResourceId()
```

##### `ResetRuleId` <a name="ResetRuleId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetRuleId"></a>

```go
func ResetRuleId()
```

##### `ResetUpdatedTime` <a name="ResetUpdatedTime" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetUpdatedTime"></a>

```go
func ResetUpdatedTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.connectionStateInput">ConnectionStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationTimeInput">CreationTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedAtInput">DeactivatedAtInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedInput">DeactivatedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.endpointNameInput">EndpointNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.groupIdInput">GroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.networkConnectivityConfigIdInput">NetworkConnectivityConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.ruleIdInput">RuleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.updatedTimeInput">UpdatedTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.connectionState">ConnectionState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationTime">CreationTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivated">Deactivated</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedAt">DeactivatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.endpointName">EndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.networkConnectivityConfigId">NetworkConnectivityConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.ruleId">RuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.updatedTime">UpdatedTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionStateInput`<sup>Optional</sup> <a name="ConnectionStateInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.connectionStateInput"></a>

```go
func ConnectionStateInput() *string
```

- *Type:* *string

---

##### `CreationTimeInput`<sup>Optional</sup> <a name="CreationTimeInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationTimeInput"></a>

```go
func CreationTimeInput() *f64
```

- *Type:* *f64

---

##### `DeactivatedAtInput`<sup>Optional</sup> <a name="DeactivatedAtInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedAtInput"></a>

```go
func DeactivatedAtInput() *f64
```

- *Type:* *f64

---

##### `DeactivatedInput`<sup>Optional</sup> <a name="DeactivatedInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedInput"></a>

```go
func DeactivatedInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointNameInput`<sup>Optional</sup> <a name="EndpointNameInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.endpointNameInput"></a>

```go
func EndpointNameInput() *string
```

- *Type:* *string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.groupIdInput"></a>

```go
func GroupIdInput() *string
```

- *Type:* *string

---

##### `NetworkConnectivityConfigIdInput`<sup>Optional</sup> <a name="NetworkConnectivityConfigIdInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.networkConnectivityConfigIdInput"></a>

```go
func NetworkConnectivityConfigIdInput() *string
```

- *Type:* *string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `RuleIdInput`<sup>Optional</sup> <a name="RuleIdInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.ruleIdInput"></a>

```go
func RuleIdInput() *string
```

- *Type:* *string

---

##### `UpdatedTimeInput`<sup>Optional</sup> <a name="UpdatedTimeInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.updatedTimeInput"></a>

```go
func UpdatedTimeInput() *f64
```

- *Type:* *f64

---

##### `ConnectionState`<sup>Required</sup> <a name="ConnectionState" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.connectionState"></a>

```go
func ConnectionState() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationTime"></a>

```go
func CreationTime() *f64
```

- *Type:* *f64

---

##### `Deactivated`<sup>Required</sup> <a name="Deactivated" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivated"></a>

```go
func Deactivated() interface{}
```

- *Type:* interface{}

---

##### `DeactivatedAt`<sup>Required</sup> <a name="DeactivatedAt" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedAt"></a>

```go
func DeactivatedAt() *f64
```

- *Type:* *f64

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.endpointName"></a>

```go
func EndpointName() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `NetworkConnectivityConfigId`<sup>Required</sup> <a name="NetworkConnectivityConfigId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.networkConnectivityConfigId"></a>

```go
func NetworkConnectivityConfigId() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.ruleId"></a>

```go
func RuleId() *string
```

- *Type:* *string

---

##### `UpdatedTime`<sup>Required</sup> <a name="UpdatedTime" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.updatedTime"></a>

```go
func UpdatedTime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference <a name="MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnetworkconnectivityconfig"

mwsnetworkconnectivityconfig.NewMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.putAzurePrivateEndpointRules">PutAzurePrivateEndpointRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.resetAzurePrivateEndpointRules">ResetAzurePrivateEndpointRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAzurePrivateEndpointRules` <a name="PutAzurePrivateEndpointRules" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.putAzurePrivateEndpointRules"></a>

```go
func PutAzurePrivateEndpointRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.putAzurePrivateEndpointRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAzurePrivateEndpointRules` <a name="ResetAzurePrivateEndpointRules" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.resetAzurePrivateEndpointRules"></a>

```go
func ResetAzurePrivateEndpointRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.azurePrivateEndpointRules">AzurePrivateEndpointRules</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList">MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.azurePrivateEndpointRulesInput">AzurePrivateEndpointRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRules">MwsNetworkConnectivityConfigEgressConfigTargetRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AzurePrivateEndpointRules`<sup>Required</sup> <a name="AzurePrivateEndpointRules" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.azurePrivateEndpointRules"></a>

```go
func AzurePrivateEndpointRules() MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList">MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList</a>

---

##### `AzurePrivateEndpointRulesInput`<sup>Optional</sup> <a name="AzurePrivateEndpointRulesInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.azurePrivateEndpointRulesInput"></a>

```go
func AzurePrivateEndpointRulesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() MwsNetworkConnectivityConfigEgressConfigTargetRules
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRules">MwsNetworkConnectivityConfigEgressConfigTargetRules</a>

---



