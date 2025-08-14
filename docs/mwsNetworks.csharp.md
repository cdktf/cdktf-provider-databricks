# `mwsNetworks` Submodule <a name="`mwsNetworks` Submodule" id="@cdktf/provider-databricks.mwsNetworks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsNetworks <a name="MwsNetworks" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks databricks_mws_networks}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsNetworks(Construct Scope, string Id, MwsNetworksConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig">MwsNetworksConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutErrorMessages` <a name="PutErrorMessages" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putErrorMessages"></a>

```csharp
private void PutErrorMessages(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putErrorMessages.parameter.value"></a>

- *Type:* object

---

##### `PutGcpNetworkInfo` <a name="PutGcpNetworkInfo" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putGcpNetworkInfo"></a>

```csharp
private void PutGcpNetworkInfo(MwsNetworksGcpNetworkInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putGcpNetworkInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a>

---

##### `PutVpcEndpoints` <a name="PutVpcEndpoints" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putVpcEndpoints"></a>

```csharp
private void PutVpcEndpoints(MwsNetworksVpcEndpoints Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putVpcEndpoints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a>

---

##### `ResetCreationTime` <a name="ResetCreationTime" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetCreationTime"></a>

```csharp
private void ResetCreationTime()
```

##### `ResetErrorMessages` <a name="ResetErrorMessages" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetErrorMessages"></a>

```csharp
private void ResetErrorMessages()
```

##### `ResetGcpNetworkInfo` <a name="ResetGcpNetworkInfo" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetGcpNetworkInfo"></a>

```csharp
private void ResetGcpNetworkInfo()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNetworkId` <a name="ResetNetworkId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetNetworkId"></a>

```csharp
private void ResetNetworkId()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```

##### `ResetVpcEndpoints` <a name="ResetVpcEndpoints" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetVpcEndpoints"></a>

```csharp
private void ResetVpcEndpoints()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetVpcId"></a>

```csharp
private void ResetVpcId()
```

##### `ResetVpcStatus` <a name="ResetVpcStatus" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetVpcStatus"></a>

```csharp
private void ResetVpcStatus()
```

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
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

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

MwsNetworks.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

MwsNetworks.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

MwsNetworks.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

MwsNetworks.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MwsNetworks resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MwsNetworks to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MwsNetworks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MwsNetworks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.errorMessages">ErrorMessages</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList">MwsNetworksErrorMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.gcpNetworkInfo">GcpNetworkInfo</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference">MwsNetworksGcpNetworkInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcEndpoints">VpcEndpoints</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference">MwsNetworksVpcEndpointsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.creationTimeInput">CreationTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.errorMessagesInput">ErrorMessagesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.gcpNetworkInfoInput">GcpNetworkInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkIdInput">NetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkNameInput">NetworkNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcEndpointsInput">VpcEndpointsInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcStatusInput">VpcStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.creationTime">CreationTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkId">NetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkName">NetworkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcStatus">VpcStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.workspaceId">WorkspaceId</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ErrorMessages`<sup>Required</sup> <a name="ErrorMessages" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.errorMessages"></a>

```csharp
public MwsNetworksErrorMessagesList ErrorMessages { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList">MwsNetworksErrorMessagesList</a>

---

##### `GcpNetworkInfo`<sup>Required</sup> <a name="GcpNetworkInfo" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.gcpNetworkInfo"></a>

```csharp
public MwsNetworksGcpNetworkInfoOutputReference GcpNetworkInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference">MwsNetworksGcpNetworkInfoOutputReference</a>

---

##### `VpcEndpoints`<sup>Required</sup> <a name="VpcEndpoints" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcEndpoints"></a>

```csharp
public MwsNetworksVpcEndpointsOutputReference VpcEndpoints { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference">MwsNetworksVpcEndpointsOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `CreationTimeInput`<sup>Optional</sup> <a name="CreationTimeInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.creationTimeInput"></a>

```csharp
public double CreationTimeInput { get; }
```

- *Type:* double

---

##### `ErrorMessagesInput`<sup>Optional</sup> <a name="ErrorMessagesInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.errorMessagesInput"></a>

```csharp
public object ErrorMessagesInput { get; }
```

- *Type:* object

---

##### `GcpNetworkInfoInput`<sup>Optional</sup> <a name="GcpNetworkInfoInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.gcpNetworkInfoInput"></a>

```csharp
public MwsNetworksGcpNetworkInfo GcpNetworkInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NetworkIdInput`<sup>Optional</sup> <a name="NetworkIdInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkIdInput"></a>

```csharp
public string NetworkIdInput { get; }
```

- *Type:* string

---

##### `NetworkNameInput`<sup>Optional</sup> <a name="NetworkNameInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkNameInput"></a>

```csharp
public string NetworkNameInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `VpcEndpointsInput`<sup>Optional</sup> <a name="VpcEndpointsInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcEndpointsInput"></a>

```csharp
public MwsNetworksVpcEndpoints VpcEndpointsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a>

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `VpcStatusInput`<sup>Optional</sup> <a name="VpcStatusInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcStatusInput"></a>

```csharp
public string VpcStatusInput { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.workspaceIdInput"></a>

```csharp
public double WorkspaceIdInput { get; }
```

- *Type:* double

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.creationTime"></a>

```csharp
public double CreationTime { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NetworkId`<sup>Required</sup> <a name="NetworkId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkId"></a>

```csharp
public string NetworkId { get; }
```

- *Type:* string

---

##### `NetworkName`<sup>Required</sup> <a name="NetworkName" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkName"></a>

```csharp
public string NetworkName { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `VpcStatus`<sup>Required</sup> <a name="VpcStatus" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcStatus"></a>

```csharp
public string VpcStatus { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.workspaceId"></a>

```csharp
public double WorkspaceId { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MwsNetworksConfig <a name="MwsNetworksConfig" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsNetworksConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string NetworkName,
    double CreationTime = null,
    object ErrorMessages = null,
    MwsNetworksGcpNetworkInfo GcpNetworkInfo = null,
    string Id = null,
    string NetworkId = null,
    string[] SecurityGroupIds = null,
    string[] SubnetIds = null,
    MwsNetworksVpcEndpoints VpcEndpoints = null,
    string VpcId = null,
    string VpcStatus = null,
    double WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#account_id MwsNetworks#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.networkName">NetworkName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#network_name MwsNetworks#network_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.creationTime">CreationTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#creation_time MwsNetworks#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.errorMessages">ErrorMessages</a></code> | <code>object</code> | error_messages block. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.gcpNetworkInfo">GcpNetworkInfo</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a></code> | gcp_network_info block. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#id MwsNetworks#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.networkId">NetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#network_id MwsNetworks#network_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#security_group_ids MwsNetworks#security_group_ids}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#subnet_ids MwsNetworks#subnet_ids}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.vpcEndpoints">VpcEndpoints</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a></code> | vpc_endpoints block. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#vpc_id MwsNetworks#vpc_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.vpcStatus">VpcStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#vpc_status MwsNetworks#vpc_status}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.workspaceId">WorkspaceId</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#workspace_id MwsNetworks#workspace_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#account_id MwsNetworks#account_id}.

---

##### `NetworkName`<sup>Required</sup> <a name="NetworkName" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.networkName"></a>

```csharp
public string NetworkName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#network_name MwsNetworks#network_name}.

---

##### `CreationTime`<sup>Optional</sup> <a name="CreationTime" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.creationTime"></a>

```csharp
public double CreationTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#creation_time MwsNetworks#creation_time}.

---

##### `ErrorMessages`<sup>Optional</sup> <a name="ErrorMessages" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.errorMessages"></a>

```csharp
public object ErrorMessages { get; set; }
```

- *Type:* object

error_messages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#error_messages MwsNetworks#error_messages}

---

##### `GcpNetworkInfo`<sup>Optional</sup> <a name="GcpNetworkInfo" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.gcpNetworkInfo"></a>

```csharp
public MwsNetworksGcpNetworkInfo GcpNetworkInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a>

gcp_network_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#gcp_network_info MwsNetworks#gcp_network_info}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#id MwsNetworks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NetworkId`<sup>Optional</sup> <a name="NetworkId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.networkId"></a>

```csharp
public string NetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#network_id MwsNetworks#network_id}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#security_group_ids MwsNetworks#security_group_ids}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#subnet_ids MwsNetworks#subnet_ids}.

---

##### `VpcEndpoints`<sup>Optional</sup> <a name="VpcEndpoints" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.vpcEndpoints"></a>

```csharp
public MwsNetworksVpcEndpoints VpcEndpoints { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a>

vpc_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#vpc_endpoints MwsNetworks#vpc_endpoints}

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#vpc_id MwsNetworks#vpc_id}.

---

##### `VpcStatus`<sup>Optional</sup> <a name="VpcStatus" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.vpcStatus"></a>

```csharp
public string VpcStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#vpc_status MwsNetworks#vpc_status}.

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.workspaceId"></a>

```csharp
public double WorkspaceId { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#workspace_id MwsNetworks#workspace_id}.

---

### MwsNetworksErrorMessages <a name="MwsNetworksErrorMessages" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsNetworksErrorMessages {
    string ErrorMessage = null,
    string ErrorType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#error_message MwsNetworks#error_message}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages.property.errorType">ErrorType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#error_type MwsNetworks#error_type}. |

---

##### `ErrorMessage`<sup>Optional</sup> <a name="ErrorMessage" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#error_message MwsNetworks#error_message}.

---

##### `ErrorType`<sup>Optional</sup> <a name="ErrorType" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages.property.errorType"></a>

```csharp
public string ErrorType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#error_type MwsNetworks#error_type}.

---

### MwsNetworksGcpNetworkInfo <a name="MwsNetworksGcpNetworkInfo" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsNetworksGcpNetworkInfo {
    string NetworkProjectId,
    string SubnetId,
    string SubnetRegion,
    string VpcId,
    string PodIpRangeName = null,
    string ServiceIpRangeName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.networkProjectId">NetworkProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#network_project_id MwsNetworks#network_project_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#subnet_id MwsNetworks#subnet_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.subnetRegion">SubnetRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#subnet_region MwsNetworks#subnet_region}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#vpc_id MwsNetworks#vpc_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.podIpRangeName">PodIpRangeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#pod_ip_range_name MwsNetworks#pod_ip_range_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.serviceIpRangeName">ServiceIpRangeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#service_ip_range_name MwsNetworks#service_ip_range_name}. |

---

##### `NetworkProjectId`<sup>Required</sup> <a name="NetworkProjectId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.networkProjectId"></a>

```csharp
public string NetworkProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#network_project_id MwsNetworks#network_project_id}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#subnet_id MwsNetworks#subnet_id}.

---

##### `SubnetRegion`<sup>Required</sup> <a name="SubnetRegion" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.subnetRegion"></a>

```csharp
public string SubnetRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#subnet_region MwsNetworks#subnet_region}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#vpc_id MwsNetworks#vpc_id}.

---

##### `PodIpRangeName`<sup>Optional</sup> <a name="PodIpRangeName" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.podIpRangeName"></a>

```csharp
public string PodIpRangeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#pod_ip_range_name MwsNetworks#pod_ip_range_name}.

---

##### `ServiceIpRangeName`<sup>Optional</sup> <a name="ServiceIpRangeName" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.serviceIpRangeName"></a>

```csharp
public string ServiceIpRangeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#service_ip_range_name MwsNetworks#service_ip_range_name}.

---

### MwsNetworksVpcEndpoints <a name="MwsNetworksVpcEndpoints" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsNetworksVpcEndpoints {
    string[] DataplaneRelay,
    string[] RestApi
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints.property.dataplaneRelay">DataplaneRelay</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#dataplane_relay MwsNetworks#dataplane_relay}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints.property.restApi">RestApi</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#rest_api MwsNetworks#rest_api}. |

---

##### `DataplaneRelay`<sup>Required</sup> <a name="DataplaneRelay" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints.property.dataplaneRelay"></a>

```csharp
public string[] DataplaneRelay { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#dataplane_relay MwsNetworks#dataplane_relay}.

---

##### `RestApi`<sup>Required</sup> <a name="RestApi" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints.property.restApi"></a>

```csharp
public string[] RestApi { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/mws_networks#rest_api MwsNetworks#rest_api}.

---

## Classes <a name="Classes" id="Classes"></a>

### MwsNetworksErrorMessagesList <a name="MwsNetworksErrorMessagesList" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsNetworksErrorMessagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.get"></a>

```csharp
private MwsNetworksErrorMessagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MwsNetworksErrorMessagesOutputReference <a name="MwsNetworksErrorMessagesOutputReference" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsNetworksErrorMessagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetErrorMessage` <a name="ResetErrorMessage" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.resetErrorMessage"></a>

```csharp
private void ResetErrorMessage()
```

##### `ResetErrorType` <a name="ResetErrorType" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.resetErrorType"></a>

```csharp
private void ResetErrorType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorMessageInput">ErrorMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorTypeInput">ErrorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorType">ErrorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorMessageInput`<sup>Optional</sup> <a name="ErrorMessageInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorMessageInput"></a>

```csharp
public string ErrorMessageInput { get; }
```

- *Type:* string

---

##### `ErrorTypeInput`<sup>Optional</sup> <a name="ErrorTypeInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorTypeInput"></a>

```csharp
public string ErrorTypeInput { get; }
```

- *Type:* string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `ErrorType`<sup>Required</sup> <a name="ErrorType" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorType"></a>

```csharp
public string ErrorType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MwsNetworksGcpNetworkInfoOutputReference <a name="MwsNetworksGcpNetworkInfoOutputReference" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsNetworksGcpNetworkInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.resetPodIpRangeName">ResetPodIpRangeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.resetServiceIpRangeName">ResetServiceIpRangeName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPodIpRangeName` <a name="ResetPodIpRangeName" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.resetPodIpRangeName"></a>

```csharp
private void ResetPodIpRangeName()
```

##### `ResetServiceIpRangeName` <a name="ResetServiceIpRangeName" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.resetServiceIpRangeName"></a>

```csharp
private void ResetServiceIpRangeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.networkProjectIdInput">NetworkProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.podIpRangeNameInput">PodIpRangeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.serviceIpRangeNameInput">ServiceIpRangeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetRegionInput">SubnetRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.networkProjectId">NetworkProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.podIpRangeName">PodIpRangeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.serviceIpRangeName">ServiceIpRangeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetRegion">SubnetRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkProjectIdInput`<sup>Optional</sup> <a name="NetworkProjectIdInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.networkProjectIdInput"></a>

```csharp
public string NetworkProjectIdInput { get; }
```

- *Type:* string

---

##### `PodIpRangeNameInput`<sup>Optional</sup> <a name="PodIpRangeNameInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.podIpRangeNameInput"></a>

```csharp
public string PodIpRangeNameInput { get; }
```

- *Type:* string

---

##### `ServiceIpRangeNameInput`<sup>Optional</sup> <a name="ServiceIpRangeNameInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.serviceIpRangeNameInput"></a>

```csharp
public string ServiceIpRangeNameInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `SubnetRegionInput`<sup>Optional</sup> <a name="SubnetRegionInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetRegionInput"></a>

```csharp
public string SubnetRegionInput { get; }
```

- *Type:* string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `NetworkProjectId`<sup>Required</sup> <a name="NetworkProjectId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.networkProjectId"></a>

```csharp
public string NetworkProjectId { get; }
```

- *Type:* string

---

##### `PodIpRangeName`<sup>Required</sup> <a name="PodIpRangeName" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.podIpRangeName"></a>

```csharp
public string PodIpRangeName { get; }
```

- *Type:* string

---

##### `ServiceIpRangeName`<sup>Required</sup> <a name="ServiceIpRangeName" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.serviceIpRangeName"></a>

```csharp
public string ServiceIpRangeName { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `SubnetRegion`<sup>Required</sup> <a name="SubnetRegion" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetRegion"></a>

```csharp
public string SubnetRegion { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.internalValue"></a>

```csharp
public MwsNetworksGcpNetworkInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a>

---


### MwsNetworksVpcEndpointsOutputReference <a name="MwsNetworksVpcEndpointsOutputReference" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsNetworksVpcEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.dataplaneRelayInput">DataplaneRelayInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.restApiInput">RestApiInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.dataplaneRelay">DataplaneRelay</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.restApi">RestApi</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataplaneRelayInput`<sup>Optional</sup> <a name="DataplaneRelayInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.dataplaneRelayInput"></a>

```csharp
public string[] DataplaneRelayInput { get; }
```

- *Type:* string[]

---

##### `RestApiInput`<sup>Optional</sup> <a name="RestApiInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.restApiInput"></a>

```csharp
public string[] RestApiInput { get; }
```

- *Type:* string[]

---

##### `DataplaneRelay`<sup>Required</sup> <a name="DataplaneRelay" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.dataplaneRelay"></a>

```csharp
public string[] DataplaneRelay { get; }
```

- *Type:* string[]

---

##### `RestApi`<sup>Required</sup> <a name="RestApi" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.restApi"></a>

```csharp
public string[] RestApi { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.internalValue"></a>

```csharp
public MwsNetworksVpcEndpoints InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a>

---



