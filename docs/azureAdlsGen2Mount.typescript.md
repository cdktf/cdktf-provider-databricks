# `databricks_azure_adls_gen2_mount`

Refer to the Terraform Registory for docs: [`databricks_azure_adls_gen2_mount`](https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/azure_adls_gen2_mount).

# `azureAdlsGen2Mount` Submodule <a name="`azureAdlsGen2Mount` Submodule" id="@cdktf/provider-databricks.azureAdlsGen2Mount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureAdlsGen2Mount <a name="AzureAdlsGen2Mount" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/azure_adls_gen2_mount databricks_azure_adls_gen2_mount}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer"></a>

```typescript
import { azureAdlsGen2Mount } from '@cdktf/provider-databricks'

new azureAdlsGen2Mount.AzureAdlsGen2Mount(scope: Construct, id: string, config: AzureAdlsGen2MountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig">AzureAdlsGen2MountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig">AzureAdlsGen2MountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetClusterId">resetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetDirectory">resetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetClusterId` <a name="resetClusterId" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetClusterId"></a>

```typescript
public resetClusterId(): void
```

##### `resetDirectory` <a name="resetDirectory" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetDirectory"></a>

```typescript
public resetDirectory(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isConstruct"></a>

```typescript
import { azureAdlsGen2Mount } from '@cdktf/provider-databricks'

azureAdlsGen2Mount.AzureAdlsGen2Mount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isTerraformElement"></a>

```typescript
import { azureAdlsGen2Mount } from '@cdktf/provider-databricks'

azureAdlsGen2Mount.AzureAdlsGen2Mount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isTerraformResource"></a>

```typescript
import { azureAdlsGen2Mount } from '@cdktf/provider-databricks'

azureAdlsGen2Mount.AzureAdlsGen2Mount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientSecretKeyInput">clientSecretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientSecretScopeInput">clientSecretScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.containerNameInput">containerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.directoryInput">directoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.initializeFileSystemInput">initializeFileSystemInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.mountNameInput">mountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.storageAccountNameInput">storageAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientSecretKey">clientSecretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientSecretScope">clientSecretScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.containerName">containerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.directory">directory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.initializeFileSystem">initializeFileSystem</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.mountName">mountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.storageAccountName">storageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretKeyInput`<sup>Optional</sup> <a name="clientSecretKeyInput" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientSecretKeyInput"></a>

```typescript
public readonly clientSecretKeyInput: string;
```

- *Type:* string

---

##### `clientSecretScopeInput`<sup>Optional</sup> <a name="clientSecretScopeInput" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientSecretScopeInput"></a>

```typescript
public readonly clientSecretScopeInput: string;
```

- *Type:* string

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.containerNameInput"></a>

```typescript
public readonly containerNameInput: string;
```

- *Type:* string

---

##### `directoryInput`<sup>Optional</sup> <a name="directoryInput" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.directoryInput"></a>

```typescript
public readonly directoryInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initializeFileSystemInput`<sup>Optional</sup> <a name="initializeFileSystemInput" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.initializeFileSystemInput"></a>

```typescript
public readonly initializeFileSystemInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mountNameInput`<sup>Optional</sup> <a name="mountNameInput" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.mountNameInput"></a>

```typescript
public readonly mountNameInput: string;
```

- *Type:* string

---

##### `storageAccountNameInput`<sup>Optional</sup> <a name="storageAccountNameInput" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.storageAccountNameInput"></a>

```typescript
public readonly storageAccountNameInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecretKey`<sup>Required</sup> <a name="clientSecretKey" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientSecretKey"></a>

```typescript
public readonly clientSecretKey: string;
```

- *Type:* string

---

##### `clientSecretScope`<sup>Required</sup> <a name="clientSecretScope" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientSecretScope"></a>

```typescript
public readonly clientSecretScope: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.directory"></a>

```typescript
public readonly directory: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initializeFileSystem`<sup>Required</sup> <a name="initializeFileSystem" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.initializeFileSystem"></a>

```typescript
public readonly initializeFileSystem: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mountName`<sup>Required</sup> <a name="mountName" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.mountName"></a>

```typescript
public readonly mountName: string;
```

- *Type:* string

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.storageAccountName"></a>

```typescript
public readonly storageAccountName: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AzureAdlsGen2MountConfig <a name="AzureAdlsGen2MountConfig" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.Initializer"></a>

```typescript
import { azureAdlsGen2Mount } from '@cdktf/provider-databricks'

const azureAdlsGen2MountConfig: azureAdlsGen2Mount.AzureAdlsGen2MountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/azure_adls_gen2_mount#client_id AzureAdlsGen2Mount#client_id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.clientSecretKey">clientSecretKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/azure_adls_gen2_mount#client_secret_key AzureAdlsGen2Mount#client_secret_key}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.clientSecretScope">clientSecretScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/azure_adls_gen2_mount#client_secret_scope AzureAdlsGen2Mount#client_secret_scope}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.containerName">containerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/azure_adls_gen2_mount#container_name AzureAdlsGen2Mount#container_name}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.initializeFileSystem">initializeFileSystem</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/azure_adls_gen2_mount#initialize_file_system AzureAdlsGen2Mount#initialize_file_system}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.mountName">mountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/azure_adls_gen2_mount#mount_name AzureAdlsGen2Mount#mount_name}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.storageAccountName">storageAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/azure_adls_gen2_mount#storage_account_name AzureAdlsGen2Mount#storage_account_name}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/azure_adls_gen2_mount#tenant_id AzureAdlsGen2Mount#tenant_id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/azure_adls_gen2_mount#cluster_id AzureAdlsGen2Mount#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.directory">directory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/azure_adls_gen2_mount#directory AzureAdlsGen2Mount#directory}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/azure_adls_gen2_mount#id AzureAdlsGen2Mount#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/azure_adls_gen2_mount#client_id AzureAdlsGen2Mount#client_id}.

---

##### `clientSecretKey`<sup>Required</sup> <a name="clientSecretKey" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.clientSecretKey"></a>

```typescript
public readonly clientSecretKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/azure_adls_gen2_mount#client_secret_key AzureAdlsGen2Mount#client_secret_key}.

---

##### `clientSecretScope`<sup>Required</sup> <a name="clientSecretScope" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.clientSecretScope"></a>

```typescript
public readonly clientSecretScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/azure_adls_gen2_mount#client_secret_scope AzureAdlsGen2Mount#client_secret_scope}.

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/azure_adls_gen2_mount#container_name AzureAdlsGen2Mount#container_name}.

---

##### `initializeFileSystem`<sup>Required</sup> <a name="initializeFileSystem" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.initializeFileSystem"></a>

```typescript
public readonly initializeFileSystem: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/azure_adls_gen2_mount#initialize_file_system AzureAdlsGen2Mount#initialize_file_system}.

---

##### `mountName`<sup>Required</sup> <a name="mountName" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.mountName"></a>

```typescript
public readonly mountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/azure_adls_gen2_mount#mount_name AzureAdlsGen2Mount#mount_name}.

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.storageAccountName"></a>

```typescript
public readonly storageAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/azure_adls_gen2_mount#storage_account_name AzureAdlsGen2Mount#storage_account_name}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/azure_adls_gen2_mount#tenant_id AzureAdlsGen2Mount#tenant_id}.

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/azure_adls_gen2_mount#cluster_id AzureAdlsGen2Mount#cluster_id}.

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.directory"></a>

```typescript
public readonly directory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/azure_adls_gen2_mount#directory AzureAdlsGen2Mount#directory}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/azure_adls_gen2_mount#id AzureAdlsGen2Mount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



