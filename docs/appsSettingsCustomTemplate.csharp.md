# `appsSettingsCustomTemplate` Submodule <a name="`appsSettingsCustomTemplate` Submodule" id="@cdktf/provider-databricks.appsSettingsCustomTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsSettingsCustomTemplate <a name="AppsSettingsCustomTemplate" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template databricks_apps_settings_custom_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AppsSettingsCustomTemplate(Construct Scope, string Id, AppsSettingsCustomTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig">AppsSettingsCustomTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig">AppsSettingsCustomTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.putManifest">PutManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutManifest` <a name="PutManifest" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.putManifest"></a>

```csharp
private void PutManifest(AppsSettingsCustomTemplateManifest Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.putManifest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest">AppsSettingsCustomTemplateManifest</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.resetDescription"></a>

```csharp
private void ResetDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppsSettingsCustomTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

AppsSettingsCustomTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

AppsSettingsCustomTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

AppsSettingsCustomTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

AppsSettingsCustomTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AppsSettingsCustomTemplate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppsSettingsCustomTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppsSettingsCustomTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AppsSettingsCustomTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.creator">Creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.manifest">Manifest</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference">AppsSettingsCustomTemplateManifestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.gitProviderInput">GitProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.gitRepoInput">GitRepoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.manifestInput">ManifestInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest">AppsSettingsCustomTemplateManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.gitProvider">GitProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.gitRepo">GitRepo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.path">Path</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.creator"></a>

```csharp
public string Creator { get; }
```

- *Type:* string

---

##### `Manifest`<sup>Required</sup> <a name="Manifest" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.manifest"></a>

```csharp
public AppsSettingsCustomTemplateManifestOutputReference Manifest { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference">AppsSettingsCustomTemplateManifestOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `GitProviderInput`<sup>Optional</sup> <a name="GitProviderInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.gitProviderInput"></a>

```csharp
public string GitProviderInput { get; }
```

- *Type:* string

---

##### `GitRepoInput`<sup>Optional</sup> <a name="GitRepoInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.gitRepoInput"></a>

```csharp
public string GitRepoInput { get; }
```

- *Type:* string

---

##### `ManifestInput`<sup>Optional</sup> <a name="ManifestInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.manifestInput"></a>

```csharp
public IResolvable|AppsSettingsCustomTemplateManifest ManifestInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest">AppsSettingsCustomTemplateManifest</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `GitProvider`<sup>Required</sup> <a name="GitProvider" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.gitProvider"></a>

```csharp
public string GitProvider { get; }
```

- *Type:* string

---

##### `GitRepo`<sup>Required</sup> <a name="GitRepo" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.gitRepo"></a>

```csharp
public string GitRepo { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppsSettingsCustomTemplateConfig <a name="AppsSettingsCustomTemplateConfig" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AppsSettingsCustomTemplateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string GitProvider,
    string GitRepo,
    AppsSettingsCustomTemplateManifest Manifest,
    string Name,
    string Path,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.gitProvider">GitProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#git_provider AppsSettingsCustomTemplate#git_provider}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.gitRepo">GitRepo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#git_repo AppsSettingsCustomTemplate#git_repo}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.manifest">Manifest</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest">AppsSettingsCustomTemplateManifest</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#manifest AppsSettingsCustomTemplate#manifest}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#name AppsSettingsCustomTemplate#name}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#path AppsSettingsCustomTemplate#path}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#description AppsSettingsCustomTemplate#description}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `GitProvider`<sup>Required</sup> <a name="GitProvider" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.gitProvider"></a>

```csharp
public string GitProvider { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#git_provider AppsSettingsCustomTemplate#git_provider}.

---

##### `GitRepo`<sup>Required</sup> <a name="GitRepo" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.gitRepo"></a>

```csharp
public string GitRepo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#git_repo AppsSettingsCustomTemplate#git_repo}.

---

##### `Manifest`<sup>Required</sup> <a name="Manifest" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.manifest"></a>

```csharp
public AppsSettingsCustomTemplateManifest Manifest { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest">AppsSettingsCustomTemplateManifest</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#manifest AppsSettingsCustomTemplate#manifest}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#name AppsSettingsCustomTemplate#name}.

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#path AppsSettingsCustomTemplate#path}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#description AppsSettingsCustomTemplate#description}.

---

### AppsSettingsCustomTemplateManifest <a name="AppsSettingsCustomTemplateManifest" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AppsSettingsCustomTemplateManifest {
    string Name,
    double Version,
    string Description = null,
    IResolvable|AppsSettingsCustomTemplateManifestResourceSpecs[] ResourceSpecs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#name AppsSettingsCustomTemplate#name}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.property.version">Version</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#version AppsSettingsCustomTemplate#version}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#description AppsSettingsCustomTemplate#description}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.property.resourceSpecs">ResourceSpecs</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs">AppsSettingsCustomTemplateManifestResourceSpecs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#resource_specs AppsSettingsCustomTemplate#resource_specs}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#name AppsSettingsCustomTemplate#name}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.property.version"></a>

```csharp
public double Version { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#version AppsSettingsCustomTemplate#version}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#description AppsSettingsCustomTemplate#description}.

---

##### `ResourceSpecs`<sup>Optional</sup> <a name="ResourceSpecs" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.property.resourceSpecs"></a>

```csharp
public IResolvable|AppsSettingsCustomTemplateManifestResourceSpecs[] ResourceSpecs { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs">AppsSettingsCustomTemplateManifestResourceSpecs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#resource_specs AppsSettingsCustomTemplate#resource_specs}.

---

### AppsSettingsCustomTemplateManifestResourceSpecs <a name="AppsSettingsCustomTemplateManifestResourceSpecs" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AppsSettingsCustomTemplateManifestResourceSpecs {
    string Name,
    string Description = null,
    AppsSettingsCustomTemplateManifestResourceSpecsJobSpec JobSpec = null,
    AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec SecretSpec = null,
    AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec ServingEndpointSpec = null,
    AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec SqlWarehouseSpec = null,
    AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec UcSecurableSpec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#name AppsSettingsCustomTemplate#name}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#description AppsSettingsCustomTemplate#description}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.jobSpec">JobSpec</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec">AppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#job_spec AppsSettingsCustomTemplate#job_spec}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.secretSpec">SecretSpec</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#secret_spec AppsSettingsCustomTemplate#secret_spec}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.servingEndpointSpec">ServingEndpointSpec</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#serving_endpoint_spec AppsSettingsCustomTemplate#serving_endpoint_spec}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.sqlWarehouseSpec">SqlWarehouseSpec</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#sql_warehouse_spec AppsSettingsCustomTemplate#sql_warehouse_spec}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.ucSecurableSpec">UcSecurableSpec</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#uc_securable_spec AppsSettingsCustomTemplate#uc_securable_spec}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#name AppsSettingsCustomTemplate#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#description AppsSettingsCustomTemplate#description}.

---

##### `JobSpec`<sup>Optional</sup> <a name="JobSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.jobSpec"></a>

```csharp
public AppsSettingsCustomTemplateManifestResourceSpecsJobSpec JobSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec">AppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#job_spec AppsSettingsCustomTemplate#job_spec}.

---

##### `SecretSpec`<sup>Optional</sup> <a name="SecretSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.secretSpec"></a>

```csharp
public AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec SecretSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#secret_spec AppsSettingsCustomTemplate#secret_spec}.

---

##### `ServingEndpointSpec`<sup>Optional</sup> <a name="ServingEndpointSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.servingEndpointSpec"></a>

```csharp
public AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec ServingEndpointSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#serving_endpoint_spec AppsSettingsCustomTemplate#serving_endpoint_spec}.

---

##### `SqlWarehouseSpec`<sup>Optional</sup> <a name="SqlWarehouseSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.sqlWarehouseSpec"></a>

```csharp
public AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec SqlWarehouseSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#sql_warehouse_spec AppsSettingsCustomTemplate#sql_warehouse_spec}.

---

##### `UcSecurableSpec`<sup>Optional</sup> <a name="UcSecurableSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.ucSecurableSpec"></a>

```csharp
public AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec UcSecurableSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#uc_securable_spec AppsSettingsCustomTemplate#uc_securable_spec}.

---

### AppsSettingsCustomTemplateManifestResourceSpecsJobSpec <a name="AppsSettingsCustomTemplateManifestResourceSpecsJobSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AppsSettingsCustomTemplateManifestResourceSpecsJobSpec {
    string Permission
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}.

---

### AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec <a name="AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec {
    string Permission
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}.

---

### AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec <a name="AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec {
    string Permission
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}.

---

### AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec <a name="AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec {
    string Permission
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}.

---

### AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec <a name="AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec {
    string Permission,
    string SecurableType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.property.securableType">SecurableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#securable_type AppsSettingsCustomTemplate#securable_type}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}.

---

##### `SecurableType`<sup>Required</sup> <a name="SecurableType" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.property.securableType"></a>

```csharp
public string SecurableType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/apps_settings_custom_template#securable_type AppsSettingsCustomTemplate#securable_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppsSettingsCustomTemplateManifestOutputReference <a name="AppsSettingsCustomTemplateManifestOutputReference" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AppsSettingsCustomTemplateManifestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.putResourceSpecs">PutResourceSpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.resetResourceSpecs">ResetResourceSpecs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResourceSpecs` <a name="PutResourceSpecs" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.putResourceSpecs"></a>

```csharp
private void PutResourceSpecs(IResolvable|AppsSettingsCustomTemplateManifestResourceSpecs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.putResourceSpecs.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs">AppsSettingsCustomTemplateManifestResourceSpecs</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetResourceSpecs` <a name="ResetResourceSpecs" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.resetResourceSpecs"></a>

```csharp
private void ResetResourceSpecs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.resourceSpecs">ResourceSpecs</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList">AppsSettingsCustomTemplateManifestResourceSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.resourceSpecsInput">ResourceSpecsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs">AppsSettingsCustomTemplateManifestResourceSpecs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.versionInput">VersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest">AppsSettingsCustomTemplateManifest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceSpecs`<sup>Required</sup> <a name="ResourceSpecs" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.resourceSpecs"></a>

```csharp
public AppsSettingsCustomTemplateManifestResourceSpecsList ResourceSpecs { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList">AppsSettingsCustomTemplateManifestResourceSpecsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceSpecsInput`<sup>Optional</sup> <a name="ResourceSpecsInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.resourceSpecsInput"></a>

```csharp
public IResolvable|AppsSettingsCustomTemplateManifestResourceSpecs[] ResourceSpecsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs">AppsSettingsCustomTemplateManifestResourceSpecs</a>[]

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.versionInput"></a>

```csharp
public double VersionInput { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsSettingsCustomTemplateManifest InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest">AppsSettingsCustomTemplateManifest</a>

---


### AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference <a name="AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec">AppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsSettingsCustomTemplateManifestResourceSpecsJobSpec InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec">AppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a>

---


### AppsSettingsCustomTemplateManifestResourceSpecsList <a name="AppsSettingsCustomTemplateManifestResourceSpecsList" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AppsSettingsCustomTemplateManifestResourceSpecsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.get"></a>

```csharp
private AppsSettingsCustomTemplateManifestResourceSpecsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs">AppsSettingsCustomTemplateManifestResourceSpecs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.property.internalValue"></a>

```csharp
public IResolvable|AppsSettingsCustomTemplateManifestResourceSpecs[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs">AppsSettingsCustomTemplateManifestResourceSpecs</a>[]

---


### AppsSettingsCustomTemplateManifestResourceSpecsOutputReference <a name="AppsSettingsCustomTemplateManifestResourceSpecsOutputReference" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AppsSettingsCustomTemplateManifestResourceSpecsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putJobSpec">PutJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSecretSpec">PutSecretSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putServingEndpointSpec">PutServingEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSqlWarehouseSpec">PutSqlWarehouseSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putUcSecurableSpec">PutUcSecurableSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetJobSpec">ResetJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetSecretSpec">ResetSecretSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetServingEndpointSpec">ResetServingEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetSqlWarehouseSpec">ResetSqlWarehouseSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetUcSecurableSpec">ResetUcSecurableSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJobSpec` <a name="PutJobSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putJobSpec"></a>

```csharp
private void PutJobSpec(AppsSettingsCustomTemplateManifestResourceSpecsJobSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putJobSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec">AppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a>

---

##### `PutSecretSpec` <a name="PutSecretSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSecretSpec"></a>

```csharp
private void PutSecretSpec(AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSecretSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a>

---

##### `PutServingEndpointSpec` <a name="PutServingEndpointSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putServingEndpointSpec"></a>

```csharp
private void PutServingEndpointSpec(AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putServingEndpointSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a>

---

##### `PutSqlWarehouseSpec` <a name="PutSqlWarehouseSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSqlWarehouseSpec"></a>

```csharp
private void PutSqlWarehouseSpec(AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSqlWarehouseSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a>

---

##### `PutUcSecurableSpec` <a name="PutUcSecurableSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putUcSecurableSpec"></a>

```csharp
private void PutUcSecurableSpec(AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putUcSecurableSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetJobSpec` <a name="ResetJobSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetJobSpec"></a>

```csharp
private void ResetJobSpec()
```

##### `ResetSecretSpec` <a name="ResetSecretSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetSecretSpec"></a>

```csharp
private void ResetSecretSpec()
```

##### `ResetServingEndpointSpec` <a name="ResetServingEndpointSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetServingEndpointSpec"></a>

```csharp
private void ResetServingEndpointSpec()
```

##### `ResetSqlWarehouseSpec` <a name="ResetSqlWarehouseSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetSqlWarehouseSpec"></a>

```csharp
private void ResetSqlWarehouseSpec()
```

##### `ResetUcSecurableSpec` <a name="ResetUcSecurableSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetUcSecurableSpec"></a>

```csharp
private void ResetUcSecurableSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.jobSpec">JobSpec</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.secretSpec">SecretSpec</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.servingEndpointSpec">ServingEndpointSpec</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.sqlWarehouseSpec">SqlWarehouseSpec</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.ucSecurableSpec">UcSecurableSpec</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.jobSpecInput">JobSpecInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec">AppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.secretSpecInput">SecretSpecInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.servingEndpointSpecInput">ServingEndpointSpecInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.sqlWarehouseSpecInput">SqlWarehouseSpecInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.ucSecurableSpecInput">UcSecurableSpecInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs">AppsSettingsCustomTemplateManifestResourceSpecs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JobSpec`<sup>Required</sup> <a name="JobSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.jobSpec"></a>

```csharp
public AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference JobSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference</a>

---

##### `SecretSpec`<sup>Required</sup> <a name="SecretSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.secretSpec"></a>

```csharp
public AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference SecretSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference</a>

---

##### `ServingEndpointSpec`<sup>Required</sup> <a name="ServingEndpointSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.servingEndpointSpec"></a>

```csharp
public AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference ServingEndpointSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference</a>

---

##### `SqlWarehouseSpec`<sup>Required</sup> <a name="SqlWarehouseSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.sqlWarehouseSpec"></a>

```csharp
public AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference SqlWarehouseSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference</a>

---

##### `UcSecurableSpec`<sup>Required</sup> <a name="UcSecurableSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.ucSecurableSpec"></a>

```csharp
public AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference UcSecurableSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `JobSpecInput`<sup>Optional</sup> <a name="JobSpecInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.jobSpecInput"></a>

```csharp
public IResolvable|AppsSettingsCustomTemplateManifestResourceSpecsJobSpec JobSpecInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec">AppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SecretSpecInput`<sup>Optional</sup> <a name="SecretSpecInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.secretSpecInput"></a>

```csharp
public IResolvable|AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec SecretSpecInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a>

---

##### `ServingEndpointSpecInput`<sup>Optional</sup> <a name="ServingEndpointSpecInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.servingEndpointSpecInput"></a>

```csharp
public IResolvable|AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec ServingEndpointSpecInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a>

---

##### `SqlWarehouseSpecInput`<sup>Optional</sup> <a name="SqlWarehouseSpecInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.sqlWarehouseSpecInput"></a>

```csharp
public IResolvable|AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec SqlWarehouseSpecInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a>

---

##### `UcSecurableSpecInput`<sup>Optional</sup> <a name="UcSecurableSpecInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.ucSecurableSpecInput"></a>

```csharp
public IResolvable|AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec UcSecurableSpecInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsSettingsCustomTemplateManifestResourceSpecs InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs">AppsSettingsCustomTemplateManifestResourceSpecs</a>

---


### AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference <a name="AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a>

---


### AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference <a name="AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a>

---


### AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference <a name="AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a>

---


### AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference <a name="AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.securableTypeInput">SecurableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.securableType">SecurableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `SecurableTypeInput`<sup>Optional</sup> <a name="SecurableTypeInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.securableTypeInput"></a>

```csharp
public string SecurableTypeInput { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `SecurableType`<sup>Required</sup> <a name="SecurableType" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.securableType"></a>

```csharp
public string SecurableType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a>

---



