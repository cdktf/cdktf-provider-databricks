# `dataDatabricksGroup` Submodule <a name="`dataDatabricksGroup` Submodule" id="@cdktf/provider-databricks.dataDatabricksGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksGroup <a name="DataDatabricksGroup" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.35.0/docs/data-sources/group databricks_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer"></a>

```typescript
import { dataDatabricksGroup } from '@cdktf/provider-databricks'

new dataDatabricksGroup.DataDatabricksGroup(scope: Construct, id: string, config: DataDatabricksGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig">DataDatabricksGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig">DataDatabricksGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetAclPrincipalId">resetAclPrincipalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetAllowClusterCreate">resetAllowClusterCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetAllowInstancePoolCreate">resetAllowInstancePoolCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetChildGroups">resetChildGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetDatabricksSqlAccess">resetDatabricksSqlAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetInstanceProfiles">resetInstanceProfiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetMembers">resetMembers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetRecursive">resetRecursive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetServicePrincipals">resetServicePrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetUsers">resetUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetWorkspaceAccess">resetWorkspaceAccess</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAclPrincipalId` <a name="resetAclPrincipalId" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetAclPrincipalId"></a>

```typescript
public resetAclPrincipalId(): void
```

##### `resetAllowClusterCreate` <a name="resetAllowClusterCreate" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetAllowClusterCreate"></a>

```typescript
public resetAllowClusterCreate(): void
```

##### `resetAllowInstancePoolCreate` <a name="resetAllowInstancePoolCreate" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetAllowInstancePoolCreate"></a>

```typescript
public resetAllowInstancePoolCreate(): void
```

##### `resetChildGroups` <a name="resetChildGroups" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetChildGroups"></a>

```typescript
public resetChildGroups(): void
```

##### `resetDatabricksSqlAccess` <a name="resetDatabricksSqlAccess" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetDatabricksSqlAccess"></a>

```typescript
public resetDatabricksSqlAccess(): void
```

##### `resetExternalId` <a name="resetExternalId" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetExternalId"></a>

```typescript
public resetExternalId(): void
```

##### `resetGroups` <a name="resetGroups" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetGroups"></a>

```typescript
public resetGroups(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceProfiles` <a name="resetInstanceProfiles" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetInstanceProfiles"></a>

```typescript
public resetInstanceProfiles(): void
```

##### `resetMembers` <a name="resetMembers" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetMembers"></a>

```typescript
public resetMembers(): void
```

##### `resetRecursive` <a name="resetRecursive" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetRecursive"></a>

```typescript
public resetRecursive(): void
```

##### `resetServicePrincipals` <a name="resetServicePrincipals" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetServicePrincipals"></a>

```typescript
public resetServicePrincipals(): void
```

##### `resetUsers` <a name="resetUsers" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetUsers"></a>

```typescript
public resetUsers(): void
```

##### `resetWorkspaceAccess` <a name="resetWorkspaceAccess" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetWorkspaceAccess"></a>

```typescript
public resetWorkspaceAccess(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isConstruct"></a>

```typescript
import { dataDatabricksGroup } from '@cdktf/provider-databricks'

dataDatabricksGroup.DataDatabricksGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isTerraformElement"></a>

```typescript
import { dataDatabricksGroup } from '@cdktf/provider-databricks'

dataDatabricksGroup.DataDatabricksGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isTerraformDataSource"></a>

```typescript
import { dataDatabricksGroup } from '@cdktf/provider-databricks'

dataDatabricksGroup.DataDatabricksGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.generateConfigForImport"></a>

```typescript
import { dataDatabricksGroup } from '@cdktf/provider-databricks'

dataDatabricksGroup.DataDatabricksGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.35.0/docs/data-sources/group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.aclPrincipalIdInput">aclPrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.allowClusterCreateInput">allowClusterCreateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.allowInstancePoolCreateInput">allowInstancePoolCreateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.childGroupsInput">childGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.databricksSqlAccessInput">databricksSqlAccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.groupsInput">groupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.instanceProfilesInput">instanceProfilesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.recursiveInput">recursiveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.servicePrincipalsInput">servicePrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.usersInput">usersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.workspaceAccessInput">workspaceAccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.aclPrincipalId">aclPrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.allowClusterCreate">allowClusterCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.allowInstancePoolCreate">allowInstancePoolCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.childGroups">childGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.databricksSqlAccess">databricksSqlAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.groups">groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.instanceProfiles">instanceProfiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.recursive">recursive</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.servicePrincipals">servicePrincipals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.users">users</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.workspaceAccess">workspaceAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `aclPrincipalIdInput`<sup>Optional</sup> <a name="aclPrincipalIdInput" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.aclPrincipalIdInput"></a>

```typescript
public readonly aclPrincipalIdInput: string;
```

- *Type:* string

---

##### `allowClusterCreateInput`<sup>Optional</sup> <a name="allowClusterCreateInput" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.allowClusterCreateInput"></a>

```typescript
public readonly allowClusterCreateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowInstancePoolCreateInput`<sup>Optional</sup> <a name="allowInstancePoolCreateInput" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.allowInstancePoolCreateInput"></a>

```typescript
public readonly allowInstancePoolCreateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `childGroupsInput`<sup>Optional</sup> <a name="childGroupsInput" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.childGroupsInput"></a>

```typescript
public readonly childGroupsInput: string[];
```

- *Type:* string[]

---

##### `databricksSqlAccessInput`<sup>Optional</sup> <a name="databricksSqlAccessInput" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.databricksSqlAccessInput"></a>

```typescript
public readonly databricksSqlAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.groupsInput"></a>

```typescript
public readonly groupsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceProfilesInput`<sup>Optional</sup> <a name="instanceProfilesInput" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.instanceProfilesInput"></a>

```typescript
public readonly instanceProfilesInput: string[];
```

- *Type:* string[]

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `recursiveInput`<sup>Optional</sup> <a name="recursiveInput" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.recursiveInput"></a>

```typescript
public readonly recursiveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `servicePrincipalsInput`<sup>Optional</sup> <a name="servicePrincipalsInput" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.servicePrincipalsInput"></a>

```typescript
public readonly servicePrincipalsInput: string[];
```

- *Type:* string[]

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.usersInput"></a>

```typescript
public readonly usersInput: string[];
```

- *Type:* string[]

---

##### `workspaceAccessInput`<sup>Optional</sup> <a name="workspaceAccessInput" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.workspaceAccessInput"></a>

```typescript
public readonly workspaceAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `aclPrincipalId`<sup>Required</sup> <a name="aclPrincipalId" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.aclPrincipalId"></a>

```typescript
public readonly aclPrincipalId: string;
```

- *Type:* string

---

##### `allowClusterCreate`<sup>Required</sup> <a name="allowClusterCreate" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.allowClusterCreate"></a>

```typescript
public readonly allowClusterCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowInstancePoolCreate`<sup>Required</sup> <a name="allowInstancePoolCreate" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.allowInstancePoolCreate"></a>

```typescript
public readonly allowInstancePoolCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `childGroups`<sup>Required</sup> <a name="childGroups" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.childGroups"></a>

```typescript
public readonly childGroups: string[];
```

- *Type:* string[]

---

##### `databricksSqlAccess`<sup>Required</sup> <a name="databricksSqlAccess" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.databricksSqlAccess"></a>

```typescript
public readonly databricksSqlAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceProfiles`<sup>Required</sup> <a name="instanceProfiles" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.instanceProfiles"></a>

```typescript
public readonly instanceProfiles: string[];
```

- *Type:* string[]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `recursive`<sup>Required</sup> <a name="recursive" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.recursive"></a>

```typescript
public readonly recursive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `servicePrincipals`<sup>Required</sup> <a name="servicePrincipals" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.servicePrincipals"></a>

```typescript
public readonly servicePrincipals: string[];
```

- *Type:* string[]

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

---

##### `workspaceAccess`<sup>Required</sup> <a name="workspaceAccess" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.workspaceAccess"></a>

```typescript
public readonly workspaceAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksGroupConfig <a name="DataDatabricksGroupConfig" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.Initializer"></a>

```typescript
import { dataDatabricksGroup } from '@cdktf/provider-databricks'

const dataDatabricksGroupConfig: dataDatabricksGroup.DataDatabricksGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.35.0/docs/data-sources/group#display_name DataDatabricksGroup#display_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.aclPrincipalId">aclPrincipalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.35.0/docs/data-sources/group#acl_principal_id DataDatabricksGroup#acl_principal_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.allowClusterCreate">allowClusterCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.35.0/docs/data-sources/group#allow_cluster_create DataDatabricksGroup#allow_cluster_create}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.allowInstancePoolCreate">allowInstancePoolCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.35.0/docs/data-sources/group#allow_instance_pool_create DataDatabricksGroup#allow_instance_pool_create}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.childGroups">childGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.35.0/docs/data-sources/group#child_groups DataDatabricksGroup#child_groups}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.databricksSqlAccess">databricksSqlAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.35.0/docs/data-sources/group#databricks_sql_access DataDatabricksGroup#databricks_sql_access}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.externalId">externalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.35.0/docs/data-sources/group#external_id DataDatabricksGroup#external_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.groups">groups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.35.0/docs/data-sources/group#groups DataDatabricksGroup#groups}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.35.0/docs/data-sources/group#id DataDatabricksGroup#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.instanceProfiles">instanceProfiles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.35.0/docs/data-sources/group#instance_profiles DataDatabricksGroup#instance_profiles}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.35.0/docs/data-sources/group#members DataDatabricksGroup#members}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.recursive">recursive</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.35.0/docs/data-sources/group#recursive DataDatabricksGroup#recursive}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.servicePrincipals">servicePrincipals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.35.0/docs/data-sources/group#service_principals DataDatabricksGroup#service_principals}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.users">users</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.35.0/docs/data-sources/group#users DataDatabricksGroup#users}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.workspaceAccess">workspaceAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.35.0/docs/data-sources/group#workspace_access DataDatabricksGroup#workspace_access}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.35.0/docs/data-sources/group#display_name DataDatabricksGroup#display_name}.

---

##### `aclPrincipalId`<sup>Optional</sup> <a name="aclPrincipalId" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.aclPrincipalId"></a>

```typescript
public readonly aclPrincipalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.35.0/docs/data-sources/group#acl_principal_id DataDatabricksGroup#acl_principal_id}.

---

##### `allowClusterCreate`<sup>Optional</sup> <a name="allowClusterCreate" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.allowClusterCreate"></a>

```typescript
public readonly allowClusterCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.35.0/docs/data-sources/group#allow_cluster_create DataDatabricksGroup#allow_cluster_create}.

---

##### `allowInstancePoolCreate`<sup>Optional</sup> <a name="allowInstancePoolCreate" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.allowInstancePoolCreate"></a>

```typescript
public readonly allowInstancePoolCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.35.0/docs/data-sources/group#allow_instance_pool_create DataDatabricksGroup#allow_instance_pool_create}.

---

##### `childGroups`<sup>Optional</sup> <a name="childGroups" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.childGroups"></a>

```typescript
public readonly childGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.35.0/docs/data-sources/group#child_groups DataDatabricksGroup#child_groups}.

---

##### `databricksSqlAccess`<sup>Optional</sup> <a name="databricksSqlAccess" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.databricksSqlAccess"></a>

```typescript
public readonly databricksSqlAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.35.0/docs/data-sources/group#databricks_sql_access DataDatabricksGroup#databricks_sql_access}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.35.0/docs/data-sources/group#external_id DataDatabricksGroup#external_id}.

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.35.0/docs/data-sources/group#groups DataDatabricksGroup#groups}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.35.0/docs/data-sources/group#id DataDatabricksGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceProfiles`<sup>Optional</sup> <a name="instanceProfiles" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.instanceProfiles"></a>

```typescript
public readonly instanceProfiles: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.35.0/docs/data-sources/group#instance_profiles DataDatabricksGroup#instance_profiles}.

---

##### `members`<sup>Optional</sup> <a name="members" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.35.0/docs/data-sources/group#members DataDatabricksGroup#members}.

---

##### `recursive`<sup>Optional</sup> <a name="recursive" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.recursive"></a>

```typescript
public readonly recursive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.35.0/docs/data-sources/group#recursive DataDatabricksGroup#recursive}.

---

##### `servicePrincipals`<sup>Optional</sup> <a name="servicePrincipals" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.servicePrincipals"></a>

```typescript
public readonly servicePrincipals: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.35.0/docs/data-sources/group#service_principals DataDatabricksGroup#service_principals}.

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.35.0/docs/data-sources/group#users DataDatabricksGroup#users}.

---

##### `workspaceAccess`<sup>Optional</sup> <a name="workspaceAccess" id="@cdktf/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.workspaceAccess"></a>

```typescript
public readonly workspaceAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.35.0/docs/data-sources/group#workspace_access DataDatabricksGroup#workspace_access}.

---



