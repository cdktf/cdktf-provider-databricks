# `mwsNetworks` Submodule <a name="`mwsNetworks` Submodule" id="@cdktf/provider-databricks.mwsNetworks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsNetworks <a name="MwsNetworks" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks databricks_mws_networks}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnetworks"

mwsnetworks.NewMwsNetworks(scope Construct, id *string, config MwsNetworksConfig) MwsNetworks
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig">MwsNetworksConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig">MwsNetworksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putErrorMessages">PutErrorMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putGcpNetworkInfo">PutGcpNetworkInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putVpcEndpoints">PutVpcEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetCreationTime">ResetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetErrorMessages">ResetErrorMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetGcpNetworkInfo">ResetGcpNetworkInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetNetworkId">ResetNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetVpcEndpoints">ResetVpcEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetVpcId">ResetVpcId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetVpcStatus">ResetVpcStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutErrorMessages` <a name="PutErrorMessages" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putErrorMessages"></a>

```go
func PutErrorMessages(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putErrorMessages.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGcpNetworkInfo` <a name="PutGcpNetworkInfo" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putGcpNetworkInfo"></a>

```go
func PutGcpNetworkInfo(value MwsNetworksGcpNetworkInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putGcpNetworkInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a>

---

##### `PutVpcEndpoints` <a name="PutVpcEndpoints" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putVpcEndpoints"></a>

```go
func PutVpcEndpoints(value MwsNetworksVpcEndpoints)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putVpcEndpoints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a>

---

##### `ResetCreationTime` <a name="ResetCreationTime" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetCreationTime"></a>

```go
func ResetCreationTime()
```

##### `ResetErrorMessages` <a name="ResetErrorMessages" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetErrorMessages"></a>

```go
func ResetErrorMessages()
```

##### `ResetGcpNetworkInfo` <a name="ResetGcpNetworkInfo" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetGcpNetworkInfo"></a>

```go
func ResetGcpNetworkInfo()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetId"></a>

```go
func ResetId()
```

##### `ResetNetworkId` <a name="ResetNetworkId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetNetworkId"></a>

```go
func ResetNetworkId()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetSubnetIds"></a>

```go
func ResetSubnetIds()
```

##### `ResetVpcEndpoints` <a name="ResetVpcEndpoints" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetVpcEndpoints"></a>

```go
func ResetVpcEndpoints()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetVpcId"></a>

```go
func ResetVpcId()
```

##### `ResetVpcStatus` <a name="ResetVpcStatus" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetVpcStatus"></a>

```go
func ResetVpcStatus()
```

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MwsNetworks resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnetworks"

mwsnetworks.MwsNetworks_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnetworks"

mwsnetworks.MwsNetworks_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnetworks"

mwsnetworks.MwsNetworks_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnetworks"

mwsnetworks.MwsNetworks_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MwsNetworks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MwsNetworks to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MwsNetworks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MwsNetworks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.errorMessages">ErrorMessages</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList">MwsNetworksErrorMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.gcpNetworkInfo">GcpNetworkInfo</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference">MwsNetworksGcpNetworkInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcEndpoints">VpcEndpoints</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference">MwsNetworksVpcEndpointsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.creationTimeInput">CreationTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.errorMessagesInput">ErrorMessagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.gcpNetworkInfoInput">GcpNetworkInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkIdInput">NetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkNameInput">NetworkNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcEndpointsInput">VpcEndpointsInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcStatusInput">VpcStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.creationTime">CreationTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkId">NetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkName">NetworkName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcStatus">VpcStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.workspaceId">WorkspaceId</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ErrorMessages`<sup>Required</sup> <a name="ErrorMessages" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.errorMessages"></a>

```go
func ErrorMessages() MwsNetworksErrorMessagesList
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList">MwsNetworksErrorMessagesList</a>

---

##### `GcpNetworkInfo`<sup>Required</sup> <a name="GcpNetworkInfo" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.gcpNetworkInfo"></a>

```go
func GcpNetworkInfo() MwsNetworksGcpNetworkInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference">MwsNetworksGcpNetworkInfoOutputReference</a>

---

##### `VpcEndpoints`<sup>Required</sup> <a name="VpcEndpoints" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcEndpoints"></a>

```go
func VpcEndpoints() MwsNetworksVpcEndpointsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference">MwsNetworksVpcEndpointsOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `CreationTimeInput`<sup>Optional</sup> <a name="CreationTimeInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.creationTimeInput"></a>

```go
func CreationTimeInput() *f64
```

- *Type:* *f64

---

##### `ErrorMessagesInput`<sup>Optional</sup> <a name="ErrorMessagesInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.errorMessagesInput"></a>

```go
func ErrorMessagesInput() interface{}
```

- *Type:* interface{}

---

##### `GcpNetworkInfoInput`<sup>Optional</sup> <a name="GcpNetworkInfoInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.gcpNetworkInfoInput"></a>

```go
func GcpNetworkInfoInput() MwsNetworksGcpNetworkInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NetworkIdInput`<sup>Optional</sup> <a name="NetworkIdInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkIdInput"></a>

```go
func NetworkIdInput() *string
```

- *Type:* *string

---

##### `NetworkNameInput`<sup>Optional</sup> <a name="NetworkNameInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkNameInput"></a>

```go
func NetworkNameInput() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VpcEndpointsInput`<sup>Optional</sup> <a name="VpcEndpointsInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcEndpointsInput"></a>

```go
func VpcEndpointsInput() MwsNetworksVpcEndpoints
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a>

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `VpcStatusInput`<sup>Optional</sup> <a name="VpcStatusInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcStatusInput"></a>

```go
func VpcStatusInput() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *f64
```

- *Type:* *f64

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.creationTime"></a>

```go
func CreationTime() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NetworkId`<sup>Required</sup> <a name="NetworkId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkId"></a>

```go
func NetworkId() *string
```

- *Type:* *string

---

##### `NetworkName`<sup>Required</sup> <a name="NetworkName" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkName"></a>

```go
func NetworkName() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `VpcStatus`<sup>Required</sup> <a name="VpcStatus" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcStatus"></a>

```go
func VpcStatus() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.workspaceId"></a>

```go
func WorkspaceId() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MwsNetworksConfig <a name="MwsNetworksConfig" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnetworks"

&mwsnetworks.MwsNetworksConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	NetworkName: *string,
	CreationTime: *f64,
	ErrorMessages: interface{},
	GcpNetworkInfo: github.com/cdktf/cdktf-provider-databricks-go/databricks.mwsNetworks.MwsNetworksGcpNetworkInfo,
	Id: *string,
	NetworkId: *string,
	SecurityGroupIds: *[]*string,
	SubnetIds: *[]*string,
	VpcEndpoints: github.com/cdktf/cdktf-provider-databricks-go/databricks.mwsNetworks.MwsNetworksVpcEndpoints,
	VpcId: *string,
	VpcStatus: *string,
	WorkspaceId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#account_id MwsNetworks#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.networkName">NetworkName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#network_name MwsNetworks#network_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.creationTime">CreationTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#creation_time MwsNetworks#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.errorMessages">ErrorMessages</a></code> | <code>interface{}</code> | error_messages block. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.gcpNetworkInfo">GcpNetworkInfo</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a></code> | gcp_network_info block. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#id MwsNetworks#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.networkId">NetworkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#network_id MwsNetworks#network_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#security_group_ids MwsNetworks#security_group_ids}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#subnet_ids MwsNetworks#subnet_ids}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.vpcEndpoints">VpcEndpoints</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a></code> | vpc_endpoints block. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#vpc_id MwsNetworks#vpc_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.vpcStatus">VpcStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#vpc_status MwsNetworks#vpc_status}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.workspaceId">WorkspaceId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#workspace_id MwsNetworks#workspace_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#account_id MwsNetworks#account_id}.

---

##### `NetworkName`<sup>Required</sup> <a name="NetworkName" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.networkName"></a>

```go
NetworkName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#network_name MwsNetworks#network_name}.

---

##### `CreationTime`<sup>Optional</sup> <a name="CreationTime" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.creationTime"></a>

```go
CreationTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#creation_time MwsNetworks#creation_time}.

---

##### `ErrorMessages`<sup>Optional</sup> <a name="ErrorMessages" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.errorMessages"></a>

```go
ErrorMessages interface{}
```

- *Type:* interface{}

error_messages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#error_messages MwsNetworks#error_messages}

---

##### `GcpNetworkInfo`<sup>Optional</sup> <a name="GcpNetworkInfo" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.gcpNetworkInfo"></a>

```go
GcpNetworkInfo MwsNetworksGcpNetworkInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a>

gcp_network_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#gcp_network_info MwsNetworks#gcp_network_info}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#id MwsNetworks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NetworkId`<sup>Optional</sup> <a name="NetworkId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.networkId"></a>

```go
NetworkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#network_id MwsNetworks#network_id}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#security_group_ids MwsNetworks#security_group_ids}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#subnet_ids MwsNetworks#subnet_ids}.

---

##### `VpcEndpoints`<sup>Optional</sup> <a name="VpcEndpoints" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.vpcEndpoints"></a>

```go
VpcEndpoints MwsNetworksVpcEndpoints
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a>

vpc_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#vpc_endpoints MwsNetworks#vpc_endpoints}

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#vpc_id MwsNetworks#vpc_id}.

---

##### `VpcStatus`<sup>Optional</sup> <a name="VpcStatus" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.vpcStatus"></a>

```go
VpcStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#vpc_status MwsNetworks#vpc_status}.

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.workspaceId"></a>

```go
WorkspaceId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#workspace_id MwsNetworks#workspace_id}.

---

### MwsNetworksErrorMessages <a name="MwsNetworksErrorMessages" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnetworks"

&mwsnetworks.MwsNetworksErrorMessages {
	ErrorMessage: *string,
	ErrorType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#error_message MwsNetworks#error_message}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages.property.errorType">ErrorType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#error_type MwsNetworks#error_type}. |

---

##### `ErrorMessage`<sup>Optional</sup> <a name="ErrorMessage" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages.property.errorMessage"></a>

```go
ErrorMessage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#error_message MwsNetworks#error_message}.

---

##### `ErrorType`<sup>Optional</sup> <a name="ErrorType" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages.property.errorType"></a>

```go
ErrorType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#error_type MwsNetworks#error_type}.

---

### MwsNetworksGcpNetworkInfo <a name="MwsNetworksGcpNetworkInfo" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnetworks"

&mwsnetworks.MwsNetworksGcpNetworkInfo {
	NetworkProjectId: *string,
	PodIpRangeName: *string,
	ServiceIpRangeName: *string,
	SubnetId: *string,
	SubnetRegion: *string,
	VpcId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.networkProjectId">NetworkProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#network_project_id MwsNetworks#network_project_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.podIpRangeName">PodIpRangeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#pod_ip_range_name MwsNetworks#pod_ip_range_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.serviceIpRangeName">ServiceIpRangeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#service_ip_range_name MwsNetworks#service_ip_range_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#subnet_id MwsNetworks#subnet_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.subnetRegion">SubnetRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#subnet_region MwsNetworks#subnet_region}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#vpc_id MwsNetworks#vpc_id}. |

---

##### `NetworkProjectId`<sup>Required</sup> <a name="NetworkProjectId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.networkProjectId"></a>

```go
NetworkProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#network_project_id MwsNetworks#network_project_id}.

---

##### `PodIpRangeName`<sup>Required</sup> <a name="PodIpRangeName" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.podIpRangeName"></a>

```go
PodIpRangeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#pod_ip_range_name MwsNetworks#pod_ip_range_name}.

---

##### `ServiceIpRangeName`<sup>Required</sup> <a name="ServiceIpRangeName" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.serviceIpRangeName"></a>

```go
ServiceIpRangeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#service_ip_range_name MwsNetworks#service_ip_range_name}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#subnet_id MwsNetworks#subnet_id}.

---

##### `SubnetRegion`<sup>Required</sup> <a name="SubnetRegion" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.subnetRegion"></a>

```go
SubnetRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#subnet_region MwsNetworks#subnet_region}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#vpc_id MwsNetworks#vpc_id}.

---

### MwsNetworksVpcEndpoints <a name="MwsNetworksVpcEndpoints" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnetworks"

&mwsnetworks.MwsNetworksVpcEndpoints {
	DataplaneRelay: *[]*string,
	RestApi: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints.property.dataplaneRelay">DataplaneRelay</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#dataplane_relay MwsNetworks#dataplane_relay}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints.property.restApi">RestApi</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#rest_api MwsNetworks#rest_api}. |

---

##### `DataplaneRelay`<sup>Required</sup> <a name="DataplaneRelay" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints.property.dataplaneRelay"></a>

```go
DataplaneRelay *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#dataplane_relay MwsNetworks#dataplane_relay}.

---

##### `RestApi`<sup>Required</sup> <a name="RestApi" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints.property.restApi"></a>

```go
RestApi *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/mws_networks#rest_api MwsNetworks#rest_api}.

---

## Classes <a name="Classes" id="Classes"></a>

### MwsNetworksErrorMessagesList <a name="MwsNetworksErrorMessagesList" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnetworks"

mwsnetworks.NewMwsNetworksErrorMessagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MwsNetworksErrorMessagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.get"></a>

```go
func Get(index *f64) MwsNetworksErrorMessagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MwsNetworksErrorMessagesOutputReference <a name="MwsNetworksErrorMessagesOutputReference" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnetworks"

mwsnetworks.NewMwsNetworksErrorMessagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MwsNetworksErrorMessagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.resetErrorMessage">ResetErrorMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.resetErrorType">ResetErrorType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetErrorMessage` <a name="ResetErrorMessage" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.resetErrorMessage"></a>

```go
func ResetErrorMessage()
```

##### `ResetErrorType` <a name="ResetErrorType" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.resetErrorType"></a>

```go
func ResetErrorType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorMessageInput">ErrorMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorTypeInput">ErrorTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorType">ErrorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ErrorMessageInput`<sup>Optional</sup> <a name="ErrorMessageInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorMessageInput"></a>

```go
func ErrorMessageInput() *string
```

- *Type:* *string

---

##### `ErrorTypeInput`<sup>Optional</sup> <a name="ErrorTypeInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorTypeInput"></a>

```go
func ErrorTypeInput() *string
```

- *Type:* *string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `ErrorType`<sup>Required</sup> <a name="ErrorType" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorType"></a>

```go
func ErrorType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MwsNetworksGcpNetworkInfoOutputReference <a name="MwsNetworksGcpNetworkInfoOutputReference" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnetworks"

mwsnetworks.NewMwsNetworksGcpNetworkInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MwsNetworksGcpNetworkInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.networkProjectIdInput">NetworkProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.podIpRangeNameInput">PodIpRangeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.serviceIpRangeNameInput">ServiceIpRangeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetRegionInput">SubnetRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.networkProjectId">NetworkProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.podIpRangeName">PodIpRangeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.serviceIpRangeName">ServiceIpRangeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetRegion">SubnetRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkProjectIdInput`<sup>Optional</sup> <a name="NetworkProjectIdInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.networkProjectIdInput"></a>

```go
func NetworkProjectIdInput() *string
```

- *Type:* *string

---

##### `PodIpRangeNameInput`<sup>Optional</sup> <a name="PodIpRangeNameInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.podIpRangeNameInput"></a>

```go
func PodIpRangeNameInput() *string
```

- *Type:* *string

---

##### `ServiceIpRangeNameInput`<sup>Optional</sup> <a name="ServiceIpRangeNameInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.serviceIpRangeNameInput"></a>

```go
func ServiceIpRangeNameInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `SubnetRegionInput`<sup>Optional</sup> <a name="SubnetRegionInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetRegionInput"></a>

```go
func SubnetRegionInput() *string
```

- *Type:* *string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `NetworkProjectId`<sup>Required</sup> <a name="NetworkProjectId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.networkProjectId"></a>

```go
func NetworkProjectId() *string
```

- *Type:* *string

---

##### `PodIpRangeName`<sup>Required</sup> <a name="PodIpRangeName" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.podIpRangeName"></a>

```go
func PodIpRangeName() *string
```

- *Type:* *string

---

##### `ServiceIpRangeName`<sup>Required</sup> <a name="ServiceIpRangeName" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.serviceIpRangeName"></a>

```go
func ServiceIpRangeName() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `SubnetRegion`<sup>Required</sup> <a name="SubnetRegion" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetRegion"></a>

```go
func SubnetRegion() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() MwsNetworksGcpNetworkInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a>

---


### MwsNetworksVpcEndpointsOutputReference <a name="MwsNetworksVpcEndpointsOutputReference" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnetworks"

mwsnetworks.NewMwsNetworksVpcEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MwsNetworksVpcEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.dataplaneRelayInput">DataplaneRelayInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.restApiInput">RestApiInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.dataplaneRelay">DataplaneRelay</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.restApi">RestApi</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataplaneRelayInput`<sup>Optional</sup> <a name="DataplaneRelayInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.dataplaneRelayInput"></a>

```go
func DataplaneRelayInput() *[]*string
```

- *Type:* *[]*string

---

##### `RestApiInput`<sup>Optional</sup> <a name="RestApiInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.restApiInput"></a>

```go
func RestApiInput() *[]*string
```

- *Type:* *[]*string

---

##### `DataplaneRelay`<sup>Required</sup> <a name="DataplaneRelay" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.dataplaneRelay"></a>

```go
func DataplaneRelay() *[]*string
```

- *Type:* *[]*string

---

##### `RestApi`<sup>Required</sup> <a name="RestApi" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.restApi"></a>

```go
func RestApi() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() MwsNetworksVpcEndpoints
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a>

---



