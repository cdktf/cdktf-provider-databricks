# `databricks_azure_blob_mount`

Refer to the Terraform Registory for docs: [`databricks_azure_blob_mount`](https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/azure_blob_mount).

# `azureBlobMount` Submodule <a name="`azureBlobMount` Submodule" id="@cdktf/provider-databricks.azureBlobMount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureBlobMount <a name="AzureBlobMount" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/azure_blob_mount databricks_azure_blob_mount}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer"></a>

```typescript
import { azureBlobMount } from '@cdktf/provider-databricks'

new azureBlobMount.AzureBlobMount(scope: Construct, id: string, config: AzureBlobMountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig">AzureBlobMountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig">AzureBlobMountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetClusterId">resetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetDirectory">resetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetClusterId` <a name="resetClusterId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetClusterId"></a>

```typescript
public resetClusterId(): void
```

##### `resetDirectory` <a name="resetDirectory" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetDirectory"></a>

```typescript
public resetDirectory(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isConstruct"></a>

```typescript
import { azureBlobMount } from '@cdktf/provider-databricks'

azureBlobMount.AzureBlobMount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isTerraformElement"></a>

```typescript
import { azureBlobMount } from '@cdktf/provider-databricks'

azureBlobMount.AzureBlobMount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isTerraformResource"></a>

```typescript
import { azureBlobMount } from '@cdktf/provider-databricks'

azureBlobMount.AzureBlobMount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.authTypeInput">authTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.containerNameInput">containerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.directoryInput">directoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.mountNameInput">mountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.storageAccountNameInput">storageAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretKeyInput">tokenSecretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretScopeInput">tokenSecretScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.containerName">containerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.directory">directory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.mountName">mountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.storageAccountName">storageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretKey">tokenSecretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretScope">tokenSecretScope</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.authTypeInput"></a>

```typescript
public readonly authTypeInput: string;
```

- *Type:* string

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.containerNameInput"></a>

```typescript
public readonly containerNameInput: string;
```

- *Type:* string

---

##### `directoryInput`<sup>Optional</sup> <a name="directoryInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.directoryInput"></a>

```typescript
public readonly directoryInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mountNameInput`<sup>Optional</sup> <a name="mountNameInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.mountNameInput"></a>

```typescript
public readonly mountNameInput: string;
```

- *Type:* string

---

##### `storageAccountNameInput`<sup>Optional</sup> <a name="storageAccountNameInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.storageAccountNameInput"></a>

```typescript
public readonly storageAccountNameInput: string;
```

- *Type:* string

---

##### `tokenSecretKeyInput`<sup>Optional</sup> <a name="tokenSecretKeyInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretKeyInput"></a>

```typescript
public readonly tokenSecretKeyInput: string;
```

- *Type:* string

---

##### `tokenSecretScopeInput`<sup>Optional</sup> <a name="tokenSecretScopeInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretScopeInput"></a>

```typescript
public readonly tokenSecretScopeInput: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.directory"></a>

```typescript
public readonly directory: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mountName`<sup>Required</sup> <a name="mountName" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.mountName"></a>

```typescript
public readonly mountName: string;
```

- *Type:* string

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.storageAccountName"></a>

```typescript
public readonly storageAccountName: string;
```

- *Type:* string

---

##### `tokenSecretKey`<sup>Required</sup> <a name="tokenSecretKey" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretKey"></a>

```typescript
public readonly tokenSecretKey: string;
```

- *Type:* string

---

##### `tokenSecretScope`<sup>Required</sup> <a name="tokenSecretScope" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretScope"></a>

```typescript
public readonly tokenSecretScope: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AzureBlobMountConfig <a name="AzureBlobMountConfig" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.Initializer"></a>

```typescript
import { azureBlobMount } from '@cdktf/provider-databricks'

const azureBlobMountConfig: azureBlobMount.AzureBlobMountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.authType">authType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/azure_blob_mount#auth_type AzureBlobMount#auth_type}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.containerName">containerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/azure_blob_mount#container_name AzureBlobMount#container_name}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.mountName">mountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/azure_blob_mount#mount_name AzureBlobMount#mount_name}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.storageAccountName">storageAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/azure_blob_mount#storage_account_name AzureBlobMount#storage_account_name}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.tokenSecretKey">tokenSecretKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/azure_blob_mount#token_secret_key AzureBlobMount#token_secret_key}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.tokenSecretScope">tokenSecretScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/azure_blob_mount#token_secret_scope AzureBlobMount#token_secret_scope}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/azure_blob_mount#cluster_id AzureBlobMount#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.directory">directory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/azure_blob_mount#directory AzureBlobMount#directory}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/azure_blob_mount#id AzureBlobMount#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/azure_blob_mount#auth_type AzureBlobMount#auth_type}.

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/azure_blob_mount#container_name AzureBlobMount#container_name}.

---

##### `mountName`<sup>Required</sup> <a name="mountName" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.mountName"></a>

```typescript
public readonly mountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/azure_blob_mount#mount_name AzureBlobMount#mount_name}.

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.storageAccountName"></a>

```typescript
public readonly storageAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/azure_blob_mount#storage_account_name AzureBlobMount#storage_account_name}.

---

##### `tokenSecretKey`<sup>Required</sup> <a name="tokenSecretKey" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.tokenSecretKey"></a>

```typescript
public readonly tokenSecretKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/azure_blob_mount#token_secret_key AzureBlobMount#token_secret_key}.

---

##### `tokenSecretScope`<sup>Required</sup> <a name="tokenSecretScope" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.tokenSecretScope"></a>

```typescript
public readonly tokenSecretScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/azure_blob_mount#token_secret_scope AzureBlobMount#token_secret_scope}.

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/azure_blob_mount#cluster_id AzureBlobMount#cluster_id}.

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.directory"></a>

```typescript
public readonly directory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/azure_blob_mount#directory AzureBlobMount#directory}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/azure_blob_mount#id AzureBlobMount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



