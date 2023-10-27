# `databricks_recipient`

Refer to the Terraform Registory for docs: [`databricks_recipient`](https://registry.terraform.io/providers/databricks/databricks/1.29.0/docs/resources/recipient).

# `recipient` Submodule <a name="`recipient` Submodule" id="@cdktf/provider-databricks.recipient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Recipient <a name="Recipient" id="@cdktf/provider-databricks.recipient.Recipient"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.29.0/docs/resources/recipient databricks_recipient}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.recipient.Recipient.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new Recipient(Construct Scope, string Id, RecipientConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.recipient.RecipientConfig">RecipientConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.recipient.Recipient.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.recipient.Recipient.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.recipient.Recipient.Initializer.parameter.config"></a>

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
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.recipient.Recipient.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.recipient.Recipient.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.recipient.Recipient.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.recipient.Recipient.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.recipient.Recipient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.recipient.Recipient.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.recipient.Recipient.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.recipient.Recipient.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.recipient.Recipient.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.recipient.Recipient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipient.Recipient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.recipient.Recipient.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.recipient.Recipient.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.recipient.Recipient.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.recipient.Recipient.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipient.Recipient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.recipient.Recipient.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.recipient.Recipient.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.recipient.Recipient.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutIpAccessList` <a name="PutIpAccessList" id="@cdktf/provider-databricks.recipient.Recipient.putIpAccessList"></a>

```csharp
private void PutIpAccessList(RecipientIpAccessListStruct Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.recipient.Recipient.putIpAccessList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStruct">RecipientIpAccessListStruct</a>

---

##### `PutTokens` <a name="PutTokens" id="@cdktf/provider-databricks.recipient.Recipient.putTokens"></a>

```csharp
private void PutTokens(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.recipient.Recipient.putTokens.parameter.value"></a>

- *Type:* object

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.recipient.Recipient.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetDataRecipientGlobalMetastoreId` <a name="ResetDataRecipientGlobalMetastoreId" id="@cdktf/provider-databricks.recipient.Recipient.resetDataRecipientGlobalMetastoreId"></a>

```csharp
private void ResetDataRecipientGlobalMetastoreId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.recipient.Recipient.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpAccessList` <a name="ResetIpAccessList" id="@cdktf/provider-databricks.recipient.Recipient.resetIpAccessList"></a>

```csharp
private void ResetIpAccessList()
```

##### `ResetSharingCode` <a name="ResetSharingCode" id="@cdktf/provider-databricks.recipient.Recipient.resetSharingCode"></a>

```csharp
private void ResetSharingCode()
```

##### `ResetTokens` <a name="ResetTokens" id="@cdktf/provider-databricks.recipient.Recipient.resetTokens"></a>

```csharp
private void ResetTokens()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Recipient resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.recipient.Recipient.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

Recipient.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.recipient.Recipient.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.recipient.Recipient.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

Recipient.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.recipient.Recipient.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.recipient.Recipient.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

Recipient.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.recipient.Recipient.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.recipient.Recipient.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

Recipient.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Recipient resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.recipient.Recipient.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.recipient.Recipient.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Recipient to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.recipient.Recipient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Recipient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.29.0/docs/resources/recipient#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.recipient.Recipient.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Recipient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.ipAccessList">IpAccessList</a></code> | <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference">RecipientIpAccessListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.tokens">Tokens</a></code> | <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensList">RecipientTokensList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.authenticationTypeInput">AuthenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.dataRecipientGlobalMetastoreIdInput">DataRecipientGlobalMetastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.ipAccessListInput">IpAccessListInput</a></code> | <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStruct">RecipientIpAccessListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.sharingCodeInput">SharingCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.tokensInput">TokensInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.dataRecipientGlobalMetastoreId">DataRecipientGlobalMetastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.sharingCode">SharingCode</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.recipient.Recipient.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.recipient.Recipient.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.recipient.Recipient.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.recipient.Recipient.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.recipient.Recipient.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.recipient.Recipient.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.recipient.Recipient.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.recipient.Recipient.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.recipient.Recipient.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.recipient.Recipient.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.recipient.Recipient.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.recipient.Recipient.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.recipient.Recipient.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.recipient.Recipient.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IpAccessList`<sup>Required</sup> <a name="IpAccessList" id="@cdktf/provider-databricks.recipient.Recipient.property.ipAccessList"></a>

```csharp
public RecipientIpAccessListStructOutputReference IpAccessList { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference">RecipientIpAccessListStructOutputReference</a>

---

##### `Tokens`<sup>Required</sup> <a name="Tokens" id="@cdktf/provider-databricks.recipient.Recipient.property.tokens"></a>

```csharp
public RecipientTokensList Tokens { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.recipient.RecipientTokensList">RecipientTokensList</a>

---

##### `AuthenticationTypeInput`<sup>Optional</sup> <a name="AuthenticationTypeInput" id="@cdktf/provider-databricks.recipient.Recipient.property.authenticationTypeInput"></a>

```csharp
public string AuthenticationTypeInput { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.recipient.Recipient.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `DataRecipientGlobalMetastoreIdInput`<sup>Optional</sup> <a name="DataRecipientGlobalMetastoreIdInput" id="@cdktf/provider-databricks.recipient.Recipient.property.dataRecipientGlobalMetastoreIdInput"></a>

```csharp
public string DataRecipientGlobalMetastoreIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.recipient.Recipient.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpAccessListInput`<sup>Optional</sup> <a name="IpAccessListInput" id="@cdktf/provider-databricks.recipient.Recipient.property.ipAccessListInput"></a>

```csharp
public RecipientIpAccessListStruct IpAccessListInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStruct">RecipientIpAccessListStruct</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.recipient.Recipient.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SharingCodeInput`<sup>Optional</sup> <a name="SharingCodeInput" id="@cdktf/provider-databricks.recipient.Recipient.property.sharingCodeInput"></a>

```csharp
public string SharingCodeInput { get; }
```

- *Type:* string

---

##### `TokensInput`<sup>Optional</sup> <a name="TokensInput" id="@cdktf/provider-databricks.recipient.Recipient.property.tokensInput"></a>

```csharp
public object TokensInput { get; }
```

- *Type:* object

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktf/provider-databricks.recipient.Recipient.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.recipient.Recipient.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `DataRecipientGlobalMetastoreId`<sup>Required</sup> <a name="DataRecipientGlobalMetastoreId" id="@cdktf/provider-databricks.recipient.Recipient.property.dataRecipientGlobalMetastoreId"></a>

```csharp
public string DataRecipientGlobalMetastoreId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.recipient.Recipient.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.recipient.Recipient.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SharingCode`<sup>Required</sup> <a name="SharingCode" id="@cdktf/provider-databricks.recipient.Recipient.property.sharingCode"></a>

```csharp
public string SharingCode { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipient.Recipient.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.recipient.Recipient.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RecipientConfig <a name="RecipientConfig" id="@cdktf/provider-databricks.recipient.RecipientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.recipient.RecipientConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new RecipientConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AuthenticationType,
    string Name,
    string Comment = null,
    string DataRecipientGlobalMetastoreId = null,
    string Id = null,
    RecipientIpAccessListStruct IpAccessList = null,
    string SharingCode = null,
    object Tokens = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientConfig.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.29.0/docs/resources/recipient#authentication_type Recipient#authentication_type}. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.29.0/docs/resources/recipient#name Recipient#name}. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientConfig.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.29.0/docs/resources/recipient#comment Recipient#comment}. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientConfig.property.dataRecipientGlobalMetastoreId">DataRecipientGlobalMetastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.29.0/docs/resources/recipient#data_recipient_global_metastore_id Recipient#data_recipient_global_metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.29.0/docs/resources/recipient#id Recipient#id}. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientConfig.property.ipAccessList">IpAccessList</a></code> | <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStruct">RecipientIpAccessListStruct</a></code> | ip_access_list block. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientConfig.property.sharingCode">SharingCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.29.0/docs/resources/recipient#sharing_code Recipient#sharing_code}. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientConfig.property.tokens">Tokens</a></code> | <code>object</code> | tokens block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.recipient.RecipientConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.recipient.RecipientConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.recipient.RecipientConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.recipient.RecipientConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.recipient.RecipientConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.recipient.RecipientConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.recipient.RecipientConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktf/provider-databricks.recipient.RecipientConfig.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.29.0/docs/resources/recipient#authentication_type Recipient#authentication_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.recipient.RecipientConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.29.0/docs/resources/recipient#name Recipient#name}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.recipient.RecipientConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.29.0/docs/resources/recipient#comment Recipient#comment}.

---

##### `DataRecipientGlobalMetastoreId`<sup>Optional</sup> <a name="DataRecipientGlobalMetastoreId" id="@cdktf/provider-databricks.recipient.RecipientConfig.property.dataRecipientGlobalMetastoreId"></a>

```csharp
public string DataRecipientGlobalMetastoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.29.0/docs/resources/recipient#data_recipient_global_metastore_id Recipient#data_recipient_global_metastore_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.recipient.RecipientConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.29.0/docs/resources/recipient#id Recipient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAccessList`<sup>Optional</sup> <a name="IpAccessList" id="@cdktf/provider-databricks.recipient.RecipientConfig.property.ipAccessList"></a>

```csharp
public RecipientIpAccessListStruct IpAccessList { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStruct">RecipientIpAccessListStruct</a>

ip_access_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.29.0/docs/resources/recipient#ip_access_list Recipient#ip_access_list}

---

##### `SharingCode`<sup>Optional</sup> <a name="SharingCode" id="@cdktf/provider-databricks.recipient.RecipientConfig.property.sharingCode"></a>

```csharp
public string SharingCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.29.0/docs/resources/recipient#sharing_code Recipient#sharing_code}.

---

##### `Tokens`<sup>Optional</sup> <a name="Tokens" id="@cdktf/provider-databricks.recipient.RecipientConfig.property.tokens"></a>

```csharp
public object Tokens { get; set; }
```

- *Type:* object

tokens block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.29.0/docs/resources/recipient#tokens Recipient#tokens}

---

### RecipientIpAccessListStruct <a name="RecipientIpAccessListStruct" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new RecipientIpAccessListStruct {
    string[] AllowedIpAddresses
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStruct.property.allowedIpAddresses">AllowedIpAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.29.0/docs/resources/recipient#allowed_ip_addresses Recipient#allowed_ip_addresses}. |

---

##### `AllowedIpAddresses`<sup>Required</sup> <a name="AllowedIpAddresses" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStruct.property.allowedIpAddresses"></a>

```csharp
public string[] AllowedIpAddresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.29.0/docs/resources/recipient#allowed_ip_addresses Recipient#allowed_ip_addresses}.

---

### RecipientTokens <a name="RecipientTokens" id="@cdktf/provider-databricks.recipient.RecipientTokens"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.recipient.RecipientTokens.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new RecipientTokens {
    string ActivationUrl = null,
    double CreatedAt = null,
    string CreatedBy = null,
    double ExpirationTime = null,
    string Id = null,
    double UpdatedAt = null,
    string UpdatedBy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokens.property.activationUrl">ActivationUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.29.0/docs/resources/recipient#activation_url Recipient#activation_url}. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokens.property.createdAt">CreatedAt</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.29.0/docs/resources/recipient#created_at Recipient#created_at}. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokens.property.createdBy">CreatedBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.29.0/docs/resources/recipient#created_by Recipient#created_by}. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokens.property.expirationTime">ExpirationTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.29.0/docs/resources/recipient#expiration_time Recipient#expiration_time}. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokens.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.29.0/docs/resources/recipient#id Recipient#id}. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokens.property.updatedAt">UpdatedAt</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.29.0/docs/resources/recipient#updated_at Recipient#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokens.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.29.0/docs/resources/recipient#updated_by Recipient#updated_by}. |

---

##### `ActivationUrl`<sup>Optional</sup> <a name="ActivationUrl" id="@cdktf/provider-databricks.recipient.RecipientTokens.property.activationUrl"></a>

```csharp
public string ActivationUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.29.0/docs/resources/recipient#activation_url Recipient#activation_url}.

---

##### `CreatedAt`<sup>Optional</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.recipient.RecipientTokens.property.createdAt"></a>

```csharp
public double CreatedAt { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.29.0/docs/resources/recipient#created_at Recipient#created_at}.

---

##### `CreatedBy`<sup>Optional</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.recipient.RecipientTokens.property.createdBy"></a>

```csharp
public string CreatedBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.29.0/docs/resources/recipient#created_by Recipient#created_by}.

---

##### `ExpirationTime`<sup>Optional</sup> <a name="ExpirationTime" id="@cdktf/provider-databricks.recipient.RecipientTokens.property.expirationTime"></a>

```csharp
public double ExpirationTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.29.0/docs/resources/recipient#expiration_time Recipient#expiration_time}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.recipient.RecipientTokens.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.29.0/docs/resources/recipient#id Recipient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `UpdatedAt`<sup>Optional</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.recipient.RecipientTokens.property.updatedAt"></a>

```csharp
public double UpdatedAt { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.29.0/docs/resources/recipient#updated_at Recipient#updated_at}.

---

##### `UpdatedBy`<sup>Optional</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.recipient.RecipientTokens.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.29.0/docs/resources/recipient#updated_by Recipient#updated_by}.

---

## Classes <a name="Classes" id="Classes"></a>

### RecipientIpAccessListStructOutputReference <a name="RecipientIpAccessListStructOutputReference" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new RecipientIpAccessListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.property.allowedIpAddressesInput">AllowedIpAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.property.allowedIpAddresses">AllowedIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStruct">RecipientIpAccessListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedIpAddressesInput`<sup>Optional</sup> <a name="AllowedIpAddressesInput" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.property.allowedIpAddressesInput"></a>

```csharp
public string[] AllowedIpAddressesInput { get; }
```

- *Type:* string[]

---

##### `AllowedIpAddresses`<sup>Required</sup> <a name="AllowedIpAddresses" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.property.allowedIpAddresses"></a>

```csharp
public string[] AllowedIpAddresses { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.recipient.RecipientIpAccessListStructOutputReference.property.internalValue"></a>

```csharp
public RecipientIpAccessListStruct InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.recipient.RecipientIpAccessListStruct">RecipientIpAccessListStruct</a>

---


### RecipientTokensList <a name="RecipientTokensList" id="@cdktf/provider-databricks.recipient.RecipientTokensList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.recipient.RecipientTokensList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new RecipientTokensList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.recipient.RecipientTokensList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.recipient.RecipientTokensList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.recipient.RecipientTokensList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.recipient.RecipientTokensList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.recipient.RecipientTokensList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.recipient.RecipientTokensList.get"></a>

```csharp
private RecipientTokensOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.recipient.RecipientTokensList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.recipient.RecipientTokensList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.recipient.RecipientTokensList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.recipient.RecipientTokensList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RecipientTokensOutputReference <a name="RecipientTokensOutputReference" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new RecipientTokensOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActivationUrl` <a name="ResetActivationUrl" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.resetActivationUrl"></a>

```csharp
private void ResetActivationUrl()
```

##### `ResetCreatedAt` <a name="ResetCreatedAt" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.resetCreatedAt"></a>

```csharp
private void ResetCreatedAt()
```

##### `ResetCreatedBy` <a name="ResetCreatedBy" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.resetCreatedBy"></a>

```csharp
private void ResetCreatedBy()
```

##### `ResetExpirationTime` <a name="ResetExpirationTime" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.resetExpirationTime"></a>

```csharp
private void ResetExpirationTime()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetUpdatedAt` <a name="ResetUpdatedAt" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.resetUpdatedAt"></a>

```csharp
private void ResetUpdatedAt()
```

##### `ResetUpdatedBy` <a name="ResetUpdatedBy" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.resetUpdatedBy"></a>

```csharp
private void ResetUpdatedBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.activationUrlInput">ActivationUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.createdAtInput">CreatedAtInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.createdByInput">CreatedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.expirationTimeInput">ExpirationTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.updatedAtInput">UpdatedAtInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.updatedByInput">UpdatedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.activationUrl">ActivationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.createdAt">CreatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.expirationTime">ExpirationTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActivationUrlInput`<sup>Optional</sup> <a name="ActivationUrlInput" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.activationUrlInput"></a>

```csharp
public string ActivationUrlInput { get; }
```

- *Type:* string

---

##### `CreatedAtInput`<sup>Optional</sup> <a name="CreatedAtInput" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.createdAtInput"></a>

```csharp
public double CreatedAtInput { get; }
```

- *Type:* double

---

##### `CreatedByInput`<sup>Optional</sup> <a name="CreatedByInput" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.createdByInput"></a>

```csharp
public string CreatedByInput { get; }
```

- *Type:* string

---

##### `ExpirationTimeInput`<sup>Optional</sup> <a name="ExpirationTimeInput" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.expirationTimeInput"></a>

```csharp
public double ExpirationTimeInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `UpdatedAtInput`<sup>Optional</sup> <a name="UpdatedAtInput" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.updatedAtInput"></a>

```csharp
public double UpdatedAtInput { get; }
```

- *Type:* double

---

##### `UpdatedByInput`<sup>Optional</sup> <a name="UpdatedByInput" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.updatedByInput"></a>

```csharp
public string UpdatedByInput { get; }
```

- *Type:* string

---

##### `ActivationUrl`<sup>Required</sup> <a name="ActivationUrl" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.activationUrl"></a>

```csharp
public string ActivationUrl { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.createdAt"></a>

```csharp
public double CreatedAt { get; }
```

- *Type:* double

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `ExpirationTime`<sup>Required</sup> <a name="ExpirationTime" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.expirationTime"></a>

```csharp
public double ExpirationTime { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.updatedAt"></a>

```csharp
public double UpdatedAt { get; }
```

- *Type:* double

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.recipient.RecipientTokensOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



