# `instancePool` Submodule <a name="`instancePool` Submodule" id="@cdktf/provider-databricks.instancePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InstancePool <a name="InstancePool" id="@cdktf/provider-databricks.instancePool.InstancePool"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool databricks_instance_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new InstancePool(Construct Scope, string Id, InstancePoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig">InstancePoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.instancePool.InstancePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig">InstancePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.putAwsAttributes">PutAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.putAzureAttributes">PutAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.putDiskSpec">PutDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.putGcpAttributes">PutGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.putInstancePoolFleetAttributes">PutInstancePoolFleetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.putPreloadedDockerImage">PutPreloadedDockerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetAwsAttributes">ResetAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetAzureAttributes">ResetAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetCustomTags">ResetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetDiskSpec">ResetDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetEnableElasticDisk">ResetEnableElasticDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetGcpAttributes">ResetGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetInstancePoolFleetAttributes">ResetInstancePoolFleetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetInstancePoolId">ResetInstancePoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetMaxCapacity">ResetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetMinIdleInstances">ResetMinIdleInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetNodeTypeId">ResetNodeTypeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetPreloadedDockerImage">ResetPreloadedDockerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.resetPreloadedSparkVersions">ResetPreloadedSparkVersions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.instancePool.InstancePool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.instancePool.InstancePool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.instancePool.InstancePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.instancePool.InstancePool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.instancePool.InstancePool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.instancePool.InstancePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.instancePool.InstancePool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.instancePool.InstancePool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.instancePool.InstancePool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.instancePool.InstancePool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.instancePool.InstancePool.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.instancePool.InstancePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.instancePool.InstancePool.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.instancePool.InstancePool.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.instancePool.InstancePool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.instancePool.InstancePool.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.instancePool.InstancePool.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.instancePool.InstancePool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.instancePool.InstancePool.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.instancePool.InstancePool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.instancePool.InstancePool.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.instancePool.InstancePool.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.instancePool.InstancePool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAwsAttributes` <a name="PutAwsAttributes" id="@cdktf/provider-databricks.instancePool.InstancePool.putAwsAttributes"></a>

```csharp
private void PutAwsAttributes(InstancePoolAwsAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.instancePool.InstancePool.putAwsAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes">InstancePoolAwsAttributes</a>

---

##### `PutAzureAttributes` <a name="PutAzureAttributes" id="@cdktf/provider-databricks.instancePool.InstancePool.putAzureAttributes"></a>

```csharp
private void PutAzureAttributes(InstancePoolAzureAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.instancePool.InstancePool.putAzureAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes">InstancePoolAzureAttributes</a>

---

##### `PutDiskSpec` <a name="PutDiskSpec" id="@cdktf/provider-databricks.instancePool.InstancePool.putDiskSpec"></a>

```csharp
private void PutDiskSpec(InstancePoolDiskSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.instancePool.InstancePool.putDiskSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec">InstancePoolDiskSpec</a>

---

##### `PutGcpAttributes` <a name="PutGcpAttributes" id="@cdktf/provider-databricks.instancePool.InstancePool.putGcpAttributes"></a>

```csharp
private void PutGcpAttributes(InstancePoolGcpAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.instancePool.InstancePool.putGcpAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes">InstancePoolGcpAttributes</a>

---

##### `PutInstancePoolFleetAttributes` <a name="PutInstancePoolFleetAttributes" id="@cdktf/provider-databricks.instancePool.InstancePool.putInstancePoolFleetAttributes"></a>

```csharp
private void PutInstancePoolFleetAttributes(InstancePoolInstancePoolFleetAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.instancePool.InstancePool.putInstancePoolFleetAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes">InstancePoolInstancePoolFleetAttributes</a>

---

##### `PutPreloadedDockerImage` <a name="PutPreloadedDockerImage" id="@cdktf/provider-databricks.instancePool.InstancePool.putPreloadedDockerImage"></a>

```csharp
private void PutPreloadedDockerImage(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.instancePool.InstancePool.putPreloadedDockerImage.parameter.value"></a>

- *Type:* object

---

##### `ResetAwsAttributes` <a name="ResetAwsAttributes" id="@cdktf/provider-databricks.instancePool.InstancePool.resetAwsAttributes"></a>

```csharp
private void ResetAwsAttributes()
```

##### `ResetAzureAttributes` <a name="ResetAzureAttributes" id="@cdktf/provider-databricks.instancePool.InstancePool.resetAzureAttributes"></a>

```csharp
private void ResetAzureAttributes()
```

##### `ResetCustomTags` <a name="ResetCustomTags" id="@cdktf/provider-databricks.instancePool.InstancePool.resetCustomTags"></a>

```csharp
private void ResetCustomTags()
```

##### `ResetDiskSpec` <a name="ResetDiskSpec" id="@cdktf/provider-databricks.instancePool.InstancePool.resetDiskSpec"></a>

```csharp
private void ResetDiskSpec()
```

##### `ResetEnableElasticDisk` <a name="ResetEnableElasticDisk" id="@cdktf/provider-databricks.instancePool.InstancePool.resetEnableElasticDisk"></a>

```csharp
private void ResetEnableElasticDisk()
```

##### `ResetGcpAttributes` <a name="ResetGcpAttributes" id="@cdktf/provider-databricks.instancePool.InstancePool.resetGcpAttributes"></a>

```csharp
private void ResetGcpAttributes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.instancePool.InstancePool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstancePoolFleetAttributes` <a name="ResetInstancePoolFleetAttributes" id="@cdktf/provider-databricks.instancePool.InstancePool.resetInstancePoolFleetAttributes"></a>

```csharp
private void ResetInstancePoolFleetAttributes()
```

##### `ResetInstancePoolId` <a name="ResetInstancePoolId" id="@cdktf/provider-databricks.instancePool.InstancePool.resetInstancePoolId"></a>

```csharp
private void ResetInstancePoolId()
```

##### `ResetMaxCapacity` <a name="ResetMaxCapacity" id="@cdktf/provider-databricks.instancePool.InstancePool.resetMaxCapacity"></a>

```csharp
private void ResetMaxCapacity()
```

##### `ResetMinIdleInstances` <a name="ResetMinIdleInstances" id="@cdktf/provider-databricks.instancePool.InstancePool.resetMinIdleInstances"></a>

```csharp
private void ResetMinIdleInstances()
```

##### `ResetNodeTypeId` <a name="ResetNodeTypeId" id="@cdktf/provider-databricks.instancePool.InstancePool.resetNodeTypeId"></a>

```csharp
private void ResetNodeTypeId()
```

##### `ResetPreloadedDockerImage` <a name="ResetPreloadedDockerImage" id="@cdktf/provider-databricks.instancePool.InstancePool.resetPreloadedDockerImage"></a>

```csharp
private void ResetPreloadedDockerImage()
```

##### `ResetPreloadedSparkVersions` <a name="ResetPreloadedSparkVersions" id="@cdktf/provider-databricks.instancePool.InstancePool.resetPreloadedSparkVersions"></a>

```csharp
private void ResetPreloadedSparkVersions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a InstancePool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.instancePool.InstancePool.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

InstancePool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.instancePool.InstancePool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.instancePool.InstancePool.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

InstancePool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.instancePool.InstancePool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.instancePool.InstancePool.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

InstancePool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.instancePool.InstancePool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.instancePool.InstancePool.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

InstancePool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a InstancePool resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.instancePool.InstancePool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.instancePool.InstancePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the InstancePool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.instancePool.InstancePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing InstancePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.instancePool.InstancePool.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the InstancePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.awsAttributes">AwsAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference">InstancePoolAwsAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.azureAttributes">AzureAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference">InstancePoolAzureAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.diskSpec">DiskSpec</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference">InstancePoolDiskSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.gcpAttributes">GcpAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference">InstancePoolGcpAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolFleetAttributes">InstancePoolFleetAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference">InstancePoolInstancePoolFleetAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.preloadedDockerImage">PreloadedDockerImage</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList">InstancePoolPreloadedDockerImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.awsAttributesInput">AwsAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes">InstancePoolAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.azureAttributesInput">AzureAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes">InstancePoolAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.customTagsInput">CustomTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.diskSpecInput">DiskSpecInput</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec">InstancePoolDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.enableElasticDiskInput">EnableElasticDiskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.gcpAttributesInput">GcpAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes">InstancePoolGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.idleInstanceAutoterminationMinutesInput">IdleInstanceAutoterminationMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolFleetAttributesInput">InstancePoolFleetAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes">InstancePoolInstancePoolFleetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolIdInput">InstancePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolNameInput">InstancePoolNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.minIdleInstancesInput">MinIdleInstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.nodeTypeIdInput">NodeTypeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.preloadedDockerImageInput">PreloadedDockerImageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.preloadedSparkVersionsInput">PreloadedSparkVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.customTags">CustomTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.enableElasticDisk">EnableElasticDisk</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.idleInstanceAutoterminationMinutes">IdleInstanceAutoterminationMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolId">InstancePoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolName">InstancePoolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.minIdleInstances">MinIdleInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.nodeTypeId">NodeTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.preloadedSparkVersions">PreloadedSparkVersions</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.instancePool.InstancePool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.instancePool.InstancePool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.instancePool.InstancePool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.instancePool.InstancePool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.instancePool.InstancePool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.instancePool.InstancePool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.instancePool.InstancePool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.instancePool.InstancePool.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.instancePool.InstancePool.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.instancePool.InstancePool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.instancePool.InstancePool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.instancePool.InstancePool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.instancePool.InstancePool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.instancePool.InstancePool.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AwsAttributes`<sup>Required</sup> <a name="AwsAttributes" id="@cdktf/provider-databricks.instancePool.InstancePool.property.awsAttributes"></a>

```csharp
public InstancePoolAwsAttributesOutputReference AwsAttributes { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference">InstancePoolAwsAttributesOutputReference</a>

---

##### `AzureAttributes`<sup>Required</sup> <a name="AzureAttributes" id="@cdktf/provider-databricks.instancePool.InstancePool.property.azureAttributes"></a>

```csharp
public InstancePoolAzureAttributesOutputReference AzureAttributes { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference">InstancePoolAzureAttributesOutputReference</a>

---

##### `DiskSpec`<sup>Required</sup> <a name="DiskSpec" id="@cdktf/provider-databricks.instancePool.InstancePool.property.diskSpec"></a>

```csharp
public InstancePoolDiskSpecOutputReference DiskSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference">InstancePoolDiskSpecOutputReference</a>

---

##### `GcpAttributes`<sup>Required</sup> <a name="GcpAttributes" id="@cdktf/provider-databricks.instancePool.InstancePool.property.gcpAttributes"></a>

```csharp
public InstancePoolGcpAttributesOutputReference GcpAttributes { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference">InstancePoolGcpAttributesOutputReference</a>

---

##### `InstancePoolFleetAttributes`<sup>Required</sup> <a name="InstancePoolFleetAttributes" id="@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolFleetAttributes"></a>

```csharp
public InstancePoolInstancePoolFleetAttributesOutputReference InstancePoolFleetAttributes { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference">InstancePoolInstancePoolFleetAttributesOutputReference</a>

---

##### `PreloadedDockerImage`<sup>Required</sup> <a name="PreloadedDockerImage" id="@cdktf/provider-databricks.instancePool.InstancePool.property.preloadedDockerImage"></a>

```csharp
public InstancePoolPreloadedDockerImageList PreloadedDockerImage { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList">InstancePoolPreloadedDockerImageList</a>

---

##### `AwsAttributesInput`<sup>Optional</sup> <a name="AwsAttributesInput" id="@cdktf/provider-databricks.instancePool.InstancePool.property.awsAttributesInput"></a>

```csharp
public InstancePoolAwsAttributes AwsAttributesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes">InstancePoolAwsAttributes</a>

---

##### `AzureAttributesInput`<sup>Optional</sup> <a name="AzureAttributesInput" id="@cdktf/provider-databricks.instancePool.InstancePool.property.azureAttributesInput"></a>

```csharp
public InstancePoolAzureAttributes AzureAttributesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes">InstancePoolAzureAttributes</a>

---

##### `CustomTagsInput`<sup>Optional</sup> <a name="CustomTagsInput" id="@cdktf/provider-databricks.instancePool.InstancePool.property.customTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DiskSpecInput`<sup>Optional</sup> <a name="DiskSpecInput" id="@cdktf/provider-databricks.instancePool.InstancePool.property.diskSpecInput"></a>

```csharp
public InstancePoolDiskSpec DiskSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec">InstancePoolDiskSpec</a>

---

##### `EnableElasticDiskInput`<sup>Optional</sup> <a name="EnableElasticDiskInput" id="@cdktf/provider-databricks.instancePool.InstancePool.property.enableElasticDiskInput"></a>

```csharp
public object EnableElasticDiskInput { get; }
```

- *Type:* object

---

##### `GcpAttributesInput`<sup>Optional</sup> <a name="GcpAttributesInput" id="@cdktf/provider-databricks.instancePool.InstancePool.property.gcpAttributesInput"></a>

```csharp
public InstancePoolGcpAttributes GcpAttributesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes">InstancePoolGcpAttributes</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.instancePool.InstancePool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IdleInstanceAutoterminationMinutesInput`<sup>Optional</sup> <a name="IdleInstanceAutoterminationMinutesInput" id="@cdktf/provider-databricks.instancePool.InstancePool.property.idleInstanceAutoterminationMinutesInput"></a>

```csharp
public double IdleInstanceAutoterminationMinutesInput { get; }
```

- *Type:* double

---

##### `InstancePoolFleetAttributesInput`<sup>Optional</sup> <a name="InstancePoolFleetAttributesInput" id="@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolFleetAttributesInput"></a>

```csharp
public InstancePoolInstancePoolFleetAttributes InstancePoolFleetAttributesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes">InstancePoolInstancePoolFleetAttributes</a>

---

##### `InstancePoolIdInput`<sup>Optional</sup> <a name="InstancePoolIdInput" id="@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolIdInput"></a>

```csharp
public string InstancePoolIdInput { get; }
```

- *Type:* string

---

##### `InstancePoolNameInput`<sup>Optional</sup> <a name="InstancePoolNameInput" id="@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolNameInput"></a>

```csharp
public string InstancePoolNameInput { get; }
```

- *Type:* string

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktf/provider-databricks.instancePool.InstancePool.property.maxCapacityInput"></a>

```csharp
public double MaxCapacityInput { get; }
```

- *Type:* double

---

##### `MinIdleInstancesInput`<sup>Optional</sup> <a name="MinIdleInstancesInput" id="@cdktf/provider-databricks.instancePool.InstancePool.property.minIdleInstancesInput"></a>

```csharp
public double MinIdleInstancesInput { get; }
```

- *Type:* double

---

##### `NodeTypeIdInput`<sup>Optional</sup> <a name="NodeTypeIdInput" id="@cdktf/provider-databricks.instancePool.InstancePool.property.nodeTypeIdInput"></a>

```csharp
public string NodeTypeIdInput { get; }
```

- *Type:* string

---

##### `PreloadedDockerImageInput`<sup>Optional</sup> <a name="PreloadedDockerImageInput" id="@cdktf/provider-databricks.instancePool.InstancePool.property.preloadedDockerImageInput"></a>

```csharp
public object PreloadedDockerImageInput { get; }
```

- *Type:* object

---

##### `PreloadedSparkVersionsInput`<sup>Optional</sup> <a name="PreloadedSparkVersionsInput" id="@cdktf/provider-databricks.instancePool.InstancePool.property.preloadedSparkVersionsInput"></a>

```csharp
public string[] PreloadedSparkVersionsInput { get; }
```

- *Type:* string[]

---

##### `CustomTags`<sup>Required</sup> <a name="CustomTags" id="@cdktf/provider-databricks.instancePool.InstancePool.property.customTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EnableElasticDisk`<sup>Required</sup> <a name="EnableElasticDisk" id="@cdktf/provider-databricks.instancePool.InstancePool.property.enableElasticDisk"></a>

```csharp
public object EnableElasticDisk { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.instancePool.InstancePool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdleInstanceAutoterminationMinutes`<sup>Required</sup> <a name="IdleInstanceAutoterminationMinutes" id="@cdktf/provider-databricks.instancePool.InstancePool.property.idleInstanceAutoterminationMinutes"></a>

```csharp
public double IdleInstanceAutoterminationMinutes { get; }
```

- *Type:* double

---

##### `InstancePoolId`<sup>Required</sup> <a name="InstancePoolId" id="@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolId"></a>

```csharp
public string InstancePoolId { get; }
```

- *Type:* string

---

##### `InstancePoolName`<sup>Required</sup> <a name="InstancePoolName" id="@cdktf/provider-databricks.instancePool.InstancePool.property.instancePoolName"></a>

```csharp
public string InstancePoolName { get; }
```

- *Type:* string

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktf/provider-databricks.instancePool.InstancePool.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; }
```

- *Type:* double

---

##### `MinIdleInstances`<sup>Required</sup> <a name="MinIdleInstances" id="@cdktf/provider-databricks.instancePool.InstancePool.property.minIdleInstances"></a>

```csharp
public double MinIdleInstances { get; }
```

- *Type:* double

---

##### `NodeTypeId`<sup>Required</sup> <a name="NodeTypeId" id="@cdktf/provider-databricks.instancePool.InstancePool.property.nodeTypeId"></a>

```csharp
public string NodeTypeId { get; }
```

- *Type:* string

---

##### `PreloadedSparkVersions`<sup>Required</sup> <a name="PreloadedSparkVersions" id="@cdktf/provider-databricks.instancePool.InstancePool.property.preloadedSparkVersions"></a>

```csharp
public string[] PreloadedSparkVersions { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.instancePool.InstancePool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### InstancePoolAwsAttributes <a name="InstancePoolAwsAttributes" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new InstancePoolAwsAttributes {
    string Availability = null,
    double SpotBidPricePercent = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes.property.availability">Availability</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#availability InstancePool#availability}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes.property.spotBidPricePercent">SpotBidPricePercent</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#spot_bid_price_percent InstancePool#spot_bid_price_percent}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes.property.zoneId">ZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#zone_id InstancePool#zone_id}. |

---

##### `Availability`<sup>Optional</sup> <a name="Availability" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes.property.availability"></a>

```csharp
public string Availability { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#availability InstancePool#availability}.

---

##### `SpotBidPricePercent`<sup>Optional</sup> <a name="SpotBidPricePercent" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes.property.spotBidPricePercent"></a>

```csharp
public double SpotBidPricePercent { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#spot_bid_price_percent InstancePool#spot_bid_price_percent}.

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#zone_id InstancePool#zone_id}.

---

### InstancePoolAzureAttributes <a name="InstancePoolAzureAttributes" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new InstancePoolAzureAttributes {
    string Availability = null,
    double SpotBidMaxPrice = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes.property.availability">Availability</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#availability InstancePool#availability}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes.property.spotBidMaxPrice">SpotBidMaxPrice</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#spot_bid_max_price InstancePool#spot_bid_max_price}. |

---

##### `Availability`<sup>Optional</sup> <a name="Availability" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes.property.availability"></a>

```csharp
public string Availability { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#availability InstancePool#availability}.

---

##### `SpotBidMaxPrice`<sup>Optional</sup> <a name="SpotBidMaxPrice" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes.property.spotBidMaxPrice"></a>

```csharp
public double SpotBidMaxPrice { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#spot_bid_max_price InstancePool#spot_bid_max_price}.

---

### InstancePoolConfig <a name="InstancePoolConfig" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new InstancePoolConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double IdleInstanceAutoterminationMinutes,
    string InstancePoolName,
    InstancePoolAwsAttributes AwsAttributes = null,
    InstancePoolAzureAttributes AzureAttributes = null,
    System.Collections.Generic.IDictionary<string, string> CustomTags = null,
    InstancePoolDiskSpec DiskSpec = null,
    object EnableElasticDisk = null,
    InstancePoolGcpAttributes GcpAttributes = null,
    string Id = null,
    InstancePoolInstancePoolFleetAttributes InstancePoolFleetAttributes = null,
    string InstancePoolId = null,
    double MaxCapacity = null,
    double MinIdleInstances = null,
    string NodeTypeId = null,
    object PreloadedDockerImage = null,
    string[] PreloadedSparkVersions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.idleInstanceAutoterminationMinutes">IdleInstanceAutoterminationMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#idle_instance_autotermination_minutes InstancePool#idle_instance_autotermination_minutes}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.instancePoolName">InstancePoolName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#instance_pool_name InstancePool#instance_pool_name}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.awsAttributes">AwsAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes">InstancePoolAwsAttributes</a></code> | aws_attributes block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.azureAttributes">AzureAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes">InstancePoolAzureAttributes</a></code> | azure_attributes block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.customTags">CustomTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#custom_tags InstancePool#custom_tags}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.diskSpec">DiskSpec</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec">InstancePoolDiskSpec</a></code> | disk_spec block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.enableElasticDisk">EnableElasticDisk</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#enable_elastic_disk InstancePool#enable_elastic_disk}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.gcpAttributes">GcpAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes">InstancePoolGcpAttributes</a></code> | gcp_attributes block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#id InstancePool#id}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.instancePoolFleetAttributes">InstancePoolFleetAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes">InstancePoolInstancePoolFleetAttributes</a></code> | instance_pool_fleet_attributes block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.instancePoolId">InstancePoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#instance_pool_id InstancePool#instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#max_capacity InstancePool#max_capacity}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.minIdleInstances">MinIdleInstances</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#min_idle_instances InstancePool#min_idle_instances}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.nodeTypeId">NodeTypeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#node_type_id InstancePool#node_type_id}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.preloadedDockerImage">PreloadedDockerImage</a></code> | <code>object</code> | preloaded_docker_image block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.preloadedSparkVersions">PreloadedSparkVersions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#preloaded_spark_versions InstancePool#preloaded_spark_versions}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IdleInstanceAutoterminationMinutes`<sup>Required</sup> <a name="IdleInstanceAutoterminationMinutes" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.idleInstanceAutoterminationMinutes"></a>

```csharp
public double IdleInstanceAutoterminationMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#idle_instance_autotermination_minutes InstancePool#idle_instance_autotermination_minutes}.

---

##### `InstancePoolName`<sup>Required</sup> <a name="InstancePoolName" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.instancePoolName"></a>

```csharp
public string InstancePoolName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#instance_pool_name InstancePool#instance_pool_name}.

---

##### `AwsAttributes`<sup>Optional</sup> <a name="AwsAttributes" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.awsAttributes"></a>

```csharp
public InstancePoolAwsAttributes AwsAttributes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes">InstancePoolAwsAttributes</a>

aws_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#aws_attributes InstancePool#aws_attributes}

---

##### `AzureAttributes`<sup>Optional</sup> <a name="AzureAttributes" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.azureAttributes"></a>

```csharp
public InstancePoolAzureAttributes AzureAttributes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes">InstancePoolAzureAttributes</a>

azure_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#azure_attributes InstancePool#azure_attributes}

---

##### `CustomTags`<sup>Optional</sup> <a name="CustomTags" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.customTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#custom_tags InstancePool#custom_tags}.

---

##### `DiskSpec`<sup>Optional</sup> <a name="DiskSpec" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.diskSpec"></a>

```csharp
public InstancePoolDiskSpec DiskSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec">InstancePoolDiskSpec</a>

disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#disk_spec InstancePool#disk_spec}

---

##### `EnableElasticDisk`<sup>Optional</sup> <a name="EnableElasticDisk" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.enableElasticDisk"></a>

```csharp
public object EnableElasticDisk { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#enable_elastic_disk InstancePool#enable_elastic_disk}.

---

##### `GcpAttributes`<sup>Optional</sup> <a name="GcpAttributes" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.gcpAttributes"></a>

```csharp
public InstancePoolGcpAttributes GcpAttributes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes">InstancePoolGcpAttributes</a>

gcp_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#gcp_attributes InstancePool#gcp_attributes}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#id InstancePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstancePoolFleetAttributes`<sup>Optional</sup> <a name="InstancePoolFleetAttributes" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.instancePoolFleetAttributes"></a>

```csharp
public InstancePoolInstancePoolFleetAttributes InstancePoolFleetAttributes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes">InstancePoolInstancePoolFleetAttributes</a>

instance_pool_fleet_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#instance_pool_fleet_attributes InstancePool#instance_pool_fleet_attributes}

---

##### `InstancePoolId`<sup>Optional</sup> <a name="InstancePoolId" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.instancePoolId"></a>

```csharp
public string InstancePoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#instance_pool_id InstancePool#instance_pool_id}.

---

##### `MaxCapacity`<sup>Optional</sup> <a name="MaxCapacity" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#max_capacity InstancePool#max_capacity}.

---

##### `MinIdleInstances`<sup>Optional</sup> <a name="MinIdleInstances" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.minIdleInstances"></a>

```csharp
public double MinIdleInstances { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#min_idle_instances InstancePool#min_idle_instances}.

---

##### `NodeTypeId`<sup>Optional</sup> <a name="NodeTypeId" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.nodeTypeId"></a>

```csharp
public string NodeTypeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#node_type_id InstancePool#node_type_id}.

---

##### `PreloadedDockerImage`<sup>Optional</sup> <a name="PreloadedDockerImage" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.preloadedDockerImage"></a>

```csharp
public object PreloadedDockerImage { get; set; }
```

- *Type:* object

preloaded_docker_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#preloaded_docker_image InstancePool#preloaded_docker_image}

---

##### `PreloadedSparkVersions`<sup>Optional</sup> <a name="PreloadedSparkVersions" id="@cdktf/provider-databricks.instancePool.InstancePoolConfig.property.preloadedSparkVersions"></a>

```csharp
public string[] PreloadedSparkVersions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#preloaded_spark_versions InstancePool#preloaded_spark_versions}.

---

### InstancePoolDiskSpec <a name="InstancePoolDiskSpec" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new InstancePoolDiskSpec {
    double DiskCount = null,
    double DiskSize = null,
    InstancePoolDiskSpecDiskType DiskType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec.property.diskCount">DiskCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#disk_count InstancePool#disk_count}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec.property.diskSize">DiskSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#disk_size InstancePool#disk_size}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec.property.diskType">DiskType</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType">InstancePoolDiskSpecDiskType</a></code> | disk_type block. |

---

##### `DiskCount`<sup>Optional</sup> <a name="DiskCount" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec.property.diskCount"></a>

```csharp
public double DiskCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#disk_count InstancePool#disk_count}.

---

##### `DiskSize`<sup>Optional</sup> <a name="DiskSize" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec.property.diskSize"></a>

```csharp
public double DiskSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#disk_size InstancePool#disk_size}.

---

##### `DiskType`<sup>Optional</sup> <a name="DiskType" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec.property.diskType"></a>

```csharp
public InstancePoolDiskSpecDiskType DiskType { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType">InstancePoolDiskSpecDiskType</a>

disk_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#disk_type InstancePool#disk_type}

---

### InstancePoolDiskSpecDiskType <a name="InstancePoolDiskSpecDiskType" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new InstancePoolDiskSpecDiskType {
    string AzureDiskVolumeType = null,
    string EbsVolumeType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType.property.azureDiskVolumeType">AzureDiskVolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#azure_disk_volume_type InstancePool#azure_disk_volume_type}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType.property.ebsVolumeType">EbsVolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#ebs_volume_type InstancePool#ebs_volume_type}. |

---

##### `AzureDiskVolumeType`<sup>Optional</sup> <a name="AzureDiskVolumeType" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType.property.azureDiskVolumeType"></a>

```csharp
public string AzureDiskVolumeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#azure_disk_volume_type InstancePool#azure_disk_volume_type}.

---

##### `EbsVolumeType`<sup>Optional</sup> <a name="EbsVolumeType" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType.property.ebsVolumeType"></a>

```csharp
public string EbsVolumeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#ebs_volume_type InstancePool#ebs_volume_type}.

---

### InstancePoolGcpAttributes <a name="InstancePoolGcpAttributes" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new InstancePoolGcpAttributes {
    string GcpAvailability = null,
    double LocalSsdCount = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes.property.gcpAvailability">GcpAvailability</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#gcp_availability InstancePool#gcp_availability}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes.property.localSsdCount">LocalSsdCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#local_ssd_count InstancePool#local_ssd_count}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes.property.zoneId">ZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#zone_id InstancePool#zone_id}. |

---

##### `GcpAvailability`<sup>Optional</sup> <a name="GcpAvailability" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes.property.gcpAvailability"></a>

```csharp
public string GcpAvailability { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#gcp_availability InstancePool#gcp_availability}.

---

##### `LocalSsdCount`<sup>Optional</sup> <a name="LocalSsdCount" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes.property.localSsdCount"></a>

```csharp
public double LocalSsdCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#local_ssd_count InstancePool#local_ssd_count}.

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#zone_id InstancePool#zone_id}.

---

### InstancePoolInstancePoolFleetAttributes <a name="InstancePoolInstancePoolFleetAttributes" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new InstancePoolInstancePoolFleetAttributes {
    object LaunchTemplateOverride,
    InstancePoolInstancePoolFleetAttributesFleetOnDemandOption FleetOnDemandOption = null,
    InstancePoolInstancePoolFleetAttributesFleetSpotOption FleetSpotOption = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes.property.launchTemplateOverride">LaunchTemplateOverride</a></code> | <code>object</code> | launch_template_override block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes.property.fleetOnDemandOption">FleetOnDemandOption</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption">InstancePoolInstancePoolFleetAttributesFleetOnDemandOption</a></code> | fleet_on_demand_option block. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes.property.fleetSpotOption">FleetSpotOption</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption">InstancePoolInstancePoolFleetAttributesFleetSpotOption</a></code> | fleet_spot_option block. |

---

##### `LaunchTemplateOverride`<sup>Required</sup> <a name="LaunchTemplateOverride" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes.property.launchTemplateOverride"></a>

```csharp
public object LaunchTemplateOverride { get; set; }
```

- *Type:* object

launch_template_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#launch_template_override InstancePool#launch_template_override}

---

##### `FleetOnDemandOption`<sup>Optional</sup> <a name="FleetOnDemandOption" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes.property.fleetOnDemandOption"></a>

```csharp
public InstancePoolInstancePoolFleetAttributesFleetOnDemandOption FleetOnDemandOption { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption">InstancePoolInstancePoolFleetAttributesFleetOnDemandOption</a>

fleet_on_demand_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#fleet_on_demand_option InstancePool#fleet_on_demand_option}

---

##### `FleetSpotOption`<sup>Optional</sup> <a name="FleetSpotOption" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes.property.fleetSpotOption"></a>

```csharp
public InstancePoolInstancePoolFleetAttributesFleetSpotOption FleetSpotOption { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption">InstancePoolInstancePoolFleetAttributesFleetSpotOption</a>

fleet_spot_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#fleet_spot_option InstancePool#fleet_spot_option}

---

### InstancePoolInstancePoolFleetAttributesFleetOnDemandOption <a name="InstancePoolInstancePoolFleetAttributesFleetOnDemandOption" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new InstancePoolInstancePoolFleetAttributesFleetOnDemandOption {
    string AllocationStrategy,
    double InstancePoolsToUseCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption.property.allocationStrategy">AllocationStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#allocation_strategy InstancePool#allocation_strategy}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption.property.instancePoolsToUseCount">InstancePoolsToUseCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#instance_pools_to_use_count InstancePool#instance_pools_to_use_count}. |

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption.property.allocationStrategy"></a>

```csharp
public string AllocationStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#allocation_strategy InstancePool#allocation_strategy}.

---

##### `InstancePoolsToUseCount`<sup>Optional</sup> <a name="InstancePoolsToUseCount" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption.property.instancePoolsToUseCount"></a>

```csharp
public double InstancePoolsToUseCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#instance_pools_to_use_count InstancePool#instance_pools_to_use_count}.

---

### InstancePoolInstancePoolFleetAttributesFleetSpotOption <a name="InstancePoolInstancePoolFleetAttributesFleetSpotOption" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new InstancePoolInstancePoolFleetAttributesFleetSpotOption {
    string AllocationStrategy,
    double InstancePoolsToUseCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption.property.allocationStrategy">AllocationStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#allocation_strategy InstancePool#allocation_strategy}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption.property.instancePoolsToUseCount">InstancePoolsToUseCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#instance_pools_to_use_count InstancePool#instance_pools_to_use_count}. |

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption.property.allocationStrategy"></a>

```csharp
public string AllocationStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#allocation_strategy InstancePool#allocation_strategy}.

---

##### `InstancePoolsToUseCount`<sup>Optional</sup> <a name="InstancePoolsToUseCount" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption.property.instancePoolsToUseCount"></a>

```csharp
public double InstancePoolsToUseCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#instance_pools_to_use_count InstancePool#instance_pools_to_use_count}.

---

### InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride <a name="InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride {
    string AvailabilityZone,
    string InstanceType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#availability_zone InstancePool#availability_zone}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#instance_type InstancePool#instance_type}. |

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#availability_zone InstancePool#availability_zone}.

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverride.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#instance_type InstancePool#instance_type}.

---

### InstancePoolPreloadedDockerImage <a name="InstancePoolPreloadedDockerImage" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new InstancePoolPreloadedDockerImage {
    string Url,
    InstancePoolPreloadedDockerImageBasicAuth BasicAuth = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#url InstancePool#url}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage.property.basicAuth">BasicAuth</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth">InstancePoolPreloadedDockerImageBasicAuth</a></code> | basic_auth block. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#url InstancePool#url}.

---

##### `BasicAuth`<sup>Optional</sup> <a name="BasicAuth" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImage.property.basicAuth"></a>

```csharp
public InstancePoolPreloadedDockerImageBasicAuth BasicAuth { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth">InstancePoolPreloadedDockerImageBasicAuth</a>

basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#basic_auth InstancePool#basic_auth}

---

### InstancePoolPreloadedDockerImageBasicAuth <a name="InstancePoolPreloadedDockerImageBasicAuth" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new InstancePoolPreloadedDockerImageBasicAuth {
    string Password,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#password InstancePool#password}. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#username InstancePool#username}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#password InstancePool#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/instance_pool#username InstancePool#username}.

---

## Classes <a name="Classes" id="Classes"></a>

### InstancePoolAwsAttributesOutputReference <a name="InstancePoolAwsAttributesOutputReference" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new InstancePoolAwsAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resetAvailability">ResetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resetSpotBidPricePercent">ResetSpotBidPricePercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailability` <a name="ResetAvailability" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resetAvailability"></a>

```csharp
private void ResetAvailability()
```

##### `ResetSpotBidPricePercent` <a name="ResetSpotBidPricePercent" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resetSpotBidPricePercent"></a>

```csharp
private void ResetSpotBidPricePercent()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.resetZoneId"></a>

```csharp
private void ResetZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.availabilityInput">AvailabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.spotBidPricePercentInput">SpotBidPricePercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.availability">Availability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.spotBidPricePercent">SpotBidPricePercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes">InstancePoolAwsAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityInput`<sup>Optional</sup> <a name="AvailabilityInput" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.availabilityInput"></a>

```csharp
public string AvailabilityInput { get; }
```

- *Type:* string

---

##### `SpotBidPricePercentInput`<sup>Optional</sup> <a name="SpotBidPricePercentInput" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.spotBidPricePercentInput"></a>

```csharp
public double SpotBidPricePercentInput { get; }
```

- *Type:* double

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `Availability`<sup>Required</sup> <a name="Availability" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.availability"></a>

```csharp
public string Availability { get; }
```

- *Type:* string

---

##### `SpotBidPricePercent`<sup>Required</sup> <a name="SpotBidPricePercent" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.spotBidPricePercent"></a>

```csharp
public double SpotBidPricePercent { get; }
```

- *Type:* double

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributesOutputReference.property.internalValue"></a>

```csharp
public InstancePoolAwsAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolAwsAttributes">InstancePoolAwsAttributes</a>

---


### InstancePoolAzureAttributesOutputReference <a name="InstancePoolAzureAttributesOutputReference" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new InstancePoolAzureAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.resetAvailability">ResetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.resetSpotBidMaxPrice">ResetSpotBidMaxPrice</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailability` <a name="ResetAvailability" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.resetAvailability"></a>

```csharp
private void ResetAvailability()
```

##### `ResetSpotBidMaxPrice` <a name="ResetSpotBidMaxPrice" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.resetSpotBidMaxPrice"></a>

```csharp
private void ResetSpotBidMaxPrice()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.availabilityInput">AvailabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.spotBidMaxPriceInput">SpotBidMaxPriceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.availability">Availability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.spotBidMaxPrice">SpotBidMaxPrice</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes">InstancePoolAzureAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityInput`<sup>Optional</sup> <a name="AvailabilityInput" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.availabilityInput"></a>

```csharp
public string AvailabilityInput { get; }
```

- *Type:* string

---

##### `SpotBidMaxPriceInput`<sup>Optional</sup> <a name="SpotBidMaxPriceInput" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.spotBidMaxPriceInput"></a>

```csharp
public double SpotBidMaxPriceInput { get; }
```

- *Type:* double

---

##### `Availability`<sup>Required</sup> <a name="Availability" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.availability"></a>

```csharp
public string Availability { get; }
```

- *Type:* string

---

##### `SpotBidMaxPrice`<sup>Required</sup> <a name="SpotBidMaxPrice" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.spotBidMaxPrice"></a>

```csharp
public double SpotBidMaxPrice { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributesOutputReference.property.internalValue"></a>

```csharp
public InstancePoolAzureAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolAzureAttributes">InstancePoolAzureAttributes</a>

---


### InstancePoolDiskSpecDiskTypeOutputReference <a name="InstancePoolDiskSpecDiskTypeOutputReference" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new InstancePoolDiskSpecDiskTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.resetAzureDiskVolumeType">ResetAzureDiskVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.resetEbsVolumeType">ResetEbsVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAzureDiskVolumeType` <a name="ResetAzureDiskVolumeType" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.resetAzureDiskVolumeType"></a>

```csharp
private void ResetAzureDiskVolumeType()
```

##### `ResetEbsVolumeType` <a name="ResetEbsVolumeType" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.resetEbsVolumeType"></a>

```csharp
private void ResetEbsVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.azureDiskVolumeTypeInput">AzureDiskVolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.ebsVolumeTypeInput">EbsVolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.azureDiskVolumeType">AzureDiskVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.ebsVolumeType">EbsVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType">InstancePoolDiskSpecDiskType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AzureDiskVolumeTypeInput`<sup>Optional</sup> <a name="AzureDiskVolumeTypeInput" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.azureDiskVolumeTypeInput"></a>

```csharp
public string AzureDiskVolumeTypeInput { get; }
```

- *Type:* string

---

##### `EbsVolumeTypeInput`<sup>Optional</sup> <a name="EbsVolumeTypeInput" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.ebsVolumeTypeInput"></a>

```csharp
public string EbsVolumeTypeInput { get; }
```

- *Type:* string

---

##### `AzureDiskVolumeType`<sup>Required</sup> <a name="AzureDiskVolumeType" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.azureDiskVolumeType"></a>

```csharp
public string AzureDiskVolumeType { get; }
```

- *Type:* string

---

##### `EbsVolumeType`<sup>Required</sup> <a name="EbsVolumeType" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.ebsVolumeType"></a>

```csharp
public string EbsVolumeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference.property.internalValue"></a>

```csharp
public InstancePoolDiskSpecDiskType InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType">InstancePoolDiskSpecDiskType</a>

---


### InstancePoolDiskSpecOutputReference <a name="InstancePoolDiskSpecOutputReference" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new InstancePoolDiskSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.putDiskType">PutDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resetDiskCount">ResetDiskCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resetDiskSize">ResetDiskSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resetDiskType">ResetDiskType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDiskType` <a name="PutDiskType" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.putDiskType"></a>

```csharp
private void PutDiskType(InstancePoolDiskSpecDiskType Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.putDiskType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType">InstancePoolDiskSpecDiskType</a>

---

##### `ResetDiskCount` <a name="ResetDiskCount" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resetDiskCount"></a>

```csharp
private void ResetDiskCount()
```

##### `ResetDiskSize` <a name="ResetDiskSize" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resetDiskSize"></a>

```csharp
private void ResetDiskSize()
```

##### `ResetDiskType` <a name="ResetDiskType" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.resetDiskType"></a>

```csharp
private void ResetDiskType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskType">DiskType</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference">InstancePoolDiskSpecDiskTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskCountInput">DiskCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskSizeInput">DiskSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskTypeInput">DiskTypeInput</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType">InstancePoolDiskSpecDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskCount">DiskCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskSize">DiskSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec">InstancePoolDiskSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskType"></a>

```csharp
public InstancePoolDiskSpecDiskTypeOutputReference DiskType { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskTypeOutputReference">InstancePoolDiskSpecDiskTypeOutputReference</a>

---

##### `DiskCountInput`<sup>Optional</sup> <a name="DiskCountInput" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskCountInput"></a>

```csharp
public double DiskCountInput { get; }
```

- *Type:* double

---

##### `DiskSizeInput`<sup>Optional</sup> <a name="DiskSizeInput" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskSizeInput"></a>

```csharp
public double DiskSizeInput { get; }
```

- *Type:* double

---

##### `DiskTypeInput`<sup>Optional</sup> <a name="DiskTypeInput" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskTypeInput"></a>

```csharp
public InstancePoolDiskSpecDiskType DiskTypeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecDiskType">InstancePoolDiskSpecDiskType</a>

---

##### `DiskCount`<sup>Required</sup> <a name="DiskCount" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskCount"></a>

```csharp
public double DiskCount { get; }
```

- *Type:* double

---

##### `DiskSize`<sup>Required</sup> <a name="DiskSize" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.diskSize"></a>

```csharp
public double DiskSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.instancePool.InstancePoolDiskSpecOutputReference.property.internalValue"></a>

```csharp
public InstancePoolDiskSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolDiskSpec">InstancePoolDiskSpec</a>

---


### InstancePoolGcpAttributesOutputReference <a name="InstancePoolGcpAttributesOutputReference" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new InstancePoolGcpAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resetGcpAvailability">ResetGcpAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resetLocalSsdCount">ResetLocalSsdCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGcpAvailability` <a name="ResetGcpAvailability" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resetGcpAvailability"></a>

```csharp
private void ResetGcpAvailability()
```

##### `ResetLocalSsdCount` <a name="ResetLocalSsdCount" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resetLocalSsdCount"></a>

```csharp
private void ResetLocalSsdCount()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.resetZoneId"></a>

```csharp
private void ResetZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.gcpAvailabilityInput">GcpAvailabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.localSsdCountInput">LocalSsdCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.gcpAvailability">GcpAvailability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.localSsdCount">LocalSsdCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes">InstancePoolGcpAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GcpAvailabilityInput`<sup>Optional</sup> <a name="GcpAvailabilityInput" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.gcpAvailabilityInput"></a>

```csharp
public string GcpAvailabilityInput { get; }
```

- *Type:* string

---

##### `LocalSsdCountInput`<sup>Optional</sup> <a name="LocalSsdCountInput" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.localSsdCountInput"></a>

```csharp
public double LocalSsdCountInput { get; }
```

- *Type:* double

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `GcpAvailability`<sup>Required</sup> <a name="GcpAvailability" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.gcpAvailability"></a>

```csharp
public string GcpAvailability { get; }
```

- *Type:* string

---

##### `LocalSsdCount`<sup>Required</sup> <a name="LocalSsdCount" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.localSsdCount"></a>

```csharp
public double LocalSsdCount { get; }
```

- *Type:* double

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributesOutputReference.property.internalValue"></a>

```csharp
public InstancePoolGcpAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolGcpAttributes">InstancePoolGcpAttributes</a>

---


### InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference <a name="InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.resetInstancePoolsToUseCount">ResetInstancePoolsToUseCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstancePoolsToUseCount` <a name="ResetInstancePoolsToUseCount" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.resetInstancePoolsToUseCount"></a>

```csharp
private void ResetInstancePoolsToUseCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.allocationStrategyInput">AllocationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.instancePoolsToUseCountInput">InstancePoolsToUseCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.allocationStrategy">AllocationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.instancePoolsToUseCount">InstancePoolsToUseCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption">InstancePoolInstancePoolFleetAttributesFleetOnDemandOption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllocationStrategyInput`<sup>Optional</sup> <a name="AllocationStrategyInput" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.allocationStrategyInput"></a>

```csharp
public string AllocationStrategyInput { get; }
```

- *Type:* string

---

##### `InstancePoolsToUseCountInput`<sup>Optional</sup> <a name="InstancePoolsToUseCountInput" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.instancePoolsToUseCountInput"></a>

```csharp
public double InstancePoolsToUseCountInput { get; }
```

- *Type:* double

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.allocationStrategy"></a>

```csharp
public string AllocationStrategy { get; }
```

- *Type:* string

---

##### `InstancePoolsToUseCount`<sup>Required</sup> <a name="InstancePoolsToUseCount" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.instancePoolsToUseCount"></a>

```csharp
public double InstancePoolsToUseCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.internalValue"></a>

```csharp
public InstancePoolInstancePoolFleetAttributesFleetOnDemandOption InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption">InstancePoolInstancePoolFleetAttributesFleetOnDemandOption</a>

---


### InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference <a name="InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.resetInstancePoolsToUseCount">ResetInstancePoolsToUseCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstancePoolsToUseCount` <a name="ResetInstancePoolsToUseCount" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.resetInstancePoolsToUseCount"></a>

```csharp
private void ResetInstancePoolsToUseCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.allocationStrategyInput">AllocationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.instancePoolsToUseCountInput">InstancePoolsToUseCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.allocationStrategy">AllocationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.instancePoolsToUseCount">InstancePoolsToUseCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption">InstancePoolInstancePoolFleetAttributesFleetSpotOption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllocationStrategyInput`<sup>Optional</sup> <a name="AllocationStrategyInput" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.allocationStrategyInput"></a>

```csharp
public string AllocationStrategyInput { get; }
```

- *Type:* string

---

##### `InstancePoolsToUseCountInput`<sup>Optional</sup> <a name="InstancePoolsToUseCountInput" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.instancePoolsToUseCountInput"></a>

```csharp
public double InstancePoolsToUseCountInput { get; }
```

- *Type:* double

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.allocationStrategy"></a>

```csharp
public string AllocationStrategy { get; }
```

- *Type:* string

---

##### `InstancePoolsToUseCount`<sup>Required</sup> <a name="InstancePoolsToUseCount" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.instancePoolsToUseCount"></a>

```csharp
public double InstancePoolsToUseCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.internalValue"></a>

```csharp
public InstancePoolInstancePoolFleetAttributesFleetSpotOption InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption">InstancePoolInstancePoolFleetAttributesFleetSpotOption</a>

---


### InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList <a name="InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.get"></a>

```csharp
private InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference <a name="InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### InstancePoolInstancePoolFleetAttributesOutputReference <a name="InstancePoolInstancePoolFleetAttributesOutputReference" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new InstancePoolInstancePoolFleetAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putFleetOnDemandOption">PutFleetOnDemandOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putFleetSpotOption">PutFleetSpotOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putLaunchTemplateOverride">PutLaunchTemplateOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.resetFleetOnDemandOption">ResetFleetOnDemandOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.resetFleetSpotOption">ResetFleetSpotOption</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFleetOnDemandOption` <a name="PutFleetOnDemandOption" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putFleetOnDemandOption"></a>

```csharp
private void PutFleetOnDemandOption(InstancePoolInstancePoolFleetAttributesFleetOnDemandOption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putFleetOnDemandOption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption">InstancePoolInstancePoolFleetAttributesFleetOnDemandOption</a>

---

##### `PutFleetSpotOption` <a name="PutFleetSpotOption" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putFleetSpotOption"></a>

```csharp
private void PutFleetSpotOption(InstancePoolInstancePoolFleetAttributesFleetSpotOption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putFleetSpotOption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption">InstancePoolInstancePoolFleetAttributesFleetSpotOption</a>

---

##### `PutLaunchTemplateOverride` <a name="PutLaunchTemplateOverride" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putLaunchTemplateOverride"></a>

```csharp
private void PutLaunchTemplateOverride(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.putLaunchTemplateOverride.parameter.value"></a>

- *Type:* object

---

##### `ResetFleetOnDemandOption` <a name="ResetFleetOnDemandOption" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.resetFleetOnDemandOption"></a>

```csharp
private void ResetFleetOnDemandOption()
```

##### `ResetFleetSpotOption` <a name="ResetFleetSpotOption" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.resetFleetSpotOption"></a>

```csharp
private void ResetFleetSpotOption()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fleetOnDemandOption">FleetOnDemandOption</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference">InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fleetSpotOption">FleetSpotOption</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference">InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.launchTemplateOverride">LaunchTemplateOverride</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fleetOnDemandOptionInput">FleetOnDemandOptionInput</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption">InstancePoolInstancePoolFleetAttributesFleetOnDemandOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fleetSpotOptionInput">FleetSpotOptionInput</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption">InstancePoolInstancePoolFleetAttributesFleetSpotOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.launchTemplateOverrideInput">LaunchTemplateOverrideInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes">InstancePoolInstancePoolFleetAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FleetOnDemandOption`<sup>Required</sup> <a name="FleetOnDemandOption" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fleetOnDemandOption"></a>

```csharp
public InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference FleetOnDemandOption { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference">InstancePoolInstancePoolFleetAttributesFleetOnDemandOptionOutputReference</a>

---

##### `FleetSpotOption`<sup>Required</sup> <a name="FleetSpotOption" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fleetSpotOption"></a>

```csharp
public InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference FleetSpotOption { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference">InstancePoolInstancePoolFleetAttributesFleetSpotOptionOutputReference</a>

---

##### `LaunchTemplateOverride`<sup>Required</sup> <a name="LaunchTemplateOverride" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.launchTemplateOverride"></a>

```csharp
public InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList LaunchTemplateOverride { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList">InstancePoolInstancePoolFleetAttributesLaunchTemplateOverrideList</a>

---

##### `FleetOnDemandOptionInput`<sup>Optional</sup> <a name="FleetOnDemandOptionInput" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fleetOnDemandOptionInput"></a>

```csharp
public InstancePoolInstancePoolFleetAttributesFleetOnDemandOption FleetOnDemandOptionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetOnDemandOption">InstancePoolInstancePoolFleetAttributesFleetOnDemandOption</a>

---

##### `FleetSpotOptionInput`<sup>Optional</sup> <a name="FleetSpotOptionInput" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.fleetSpotOptionInput"></a>

```csharp
public InstancePoolInstancePoolFleetAttributesFleetSpotOption FleetSpotOptionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesFleetSpotOption">InstancePoolInstancePoolFleetAttributesFleetSpotOption</a>

---

##### `LaunchTemplateOverrideInput`<sup>Optional</sup> <a name="LaunchTemplateOverrideInput" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.launchTemplateOverrideInput"></a>

```csharp
public object LaunchTemplateOverrideInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributesOutputReference.property.internalValue"></a>

```csharp
public InstancePoolInstancePoolFleetAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolInstancePoolFleetAttributes">InstancePoolInstancePoolFleetAttributes</a>

---


### InstancePoolPreloadedDockerImageBasicAuthOutputReference <a name="InstancePoolPreloadedDockerImageBasicAuthOutputReference" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new InstancePoolPreloadedDockerImageBasicAuthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth">InstancePoolPreloadedDockerImageBasicAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference.property.internalValue"></a>

```csharp
public InstancePoolPreloadedDockerImageBasicAuth InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth">InstancePoolPreloadedDockerImageBasicAuth</a>

---


### InstancePoolPreloadedDockerImageList <a name="InstancePoolPreloadedDockerImageList" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new InstancePoolPreloadedDockerImageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.get"></a>

```csharp
private InstancePoolPreloadedDockerImageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### InstancePoolPreloadedDockerImageOutputReference <a name="InstancePoolPreloadedDockerImageOutputReference" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new InstancePoolPreloadedDockerImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.putBasicAuth">PutBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.resetBasicAuth">ResetBasicAuth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBasicAuth` <a name="PutBasicAuth" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.putBasicAuth"></a>

```csharp
private void PutBasicAuth(InstancePoolPreloadedDockerImageBasicAuth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.putBasicAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth">InstancePoolPreloadedDockerImageBasicAuth</a>

---

##### `ResetBasicAuth` <a name="ResetBasicAuth" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.resetBasicAuth"></a>

```csharp
private void ResetBasicAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.basicAuth">BasicAuth</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference">InstancePoolPreloadedDockerImageBasicAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.basicAuthInput">BasicAuthInput</a></code> | <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth">InstancePoolPreloadedDockerImageBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BasicAuth`<sup>Required</sup> <a name="BasicAuth" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.basicAuth"></a>

```csharp
public InstancePoolPreloadedDockerImageBasicAuthOutputReference BasicAuth { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuthOutputReference">InstancePoolPreloadedDockerImageBasicAuthOutputReference</a>

---

##### `BasicAuthInput`<sup>Optional</sup> <a name="BasicAuthInput" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.basicAuthInput"></a>

```csharp
public InstancePoolPreloadedDockerImageBasicAuth BasicAuthInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageBasicAuth">InstancePoolPreloadedDockerImageBasicAuth</a>

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.instancePool.InstancePoolPreloadedDockerImageOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



